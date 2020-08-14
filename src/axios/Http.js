/**
 * 异步请求基类
 */
import axios from 'axios';
import qs from 'qs';
import throwErrorMsg from './ThrowErrorMsg'
/** **** request拦截器==>对响应做处理 ******/
axios.interceptors.request.use(config => {
    config.method === 'post'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
}, error => { // 请求错误处理
    Promise.reject(error)
});
/** **** respone拦截器==>对响应做处理 ******/
axios.interceptors.response.use(
    res => {
        console.log(res.data.code);
        if (res.data.code === 0) {
            return res.data;
        } else {
            throwErrorMsg(res.data.message);
        }
    },
    err => {
        let text = JSON.parse(JSON.stringify(err)).response.status === 404 ? '404' : '网络异常，请重试';
        throwErrorMsg(text);
        return Promise.reject(err);
    }
);
class Http {
    async get(url, params = {}) {
        try {
            const {data} = await axios.get(url, {params}, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            return data;
        } catch (error) {

        }
    }
    async post(url, params = {}) {
        try {
            const {data} = await axios.post(`${url}?userID=${params.userID}`, params);
            return data;
        } catch (error) {

        }
    }
    async update(url, params = {}) {
        try {
            const {data} = await axios.post(`${url}/${params.id}?userID=${params.userID}`, params);
            return data;
        } catch (error) {

        }
    }
    async httpForm (url, params = {}) {
        try {
            let str = '';
            Object.keys(params).forEach((item, index) => {
                if (index === 0) {
                    str += `${item}=${encodeURIComponent(params[item])}`;
                } else {
                    str += `&${item}=${encodeURIComponent(params[item])}`;
                }
            });
            const { data } = await axios.post(url, str, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            return data;
        } catch (error) {

        }
    }
    async httpFormData (url, params) {
        let formData = new FormData();
        Object.keys(params).forEach(item => {
            FormData.append(item, params[item]);
        });
        try {
            const { data } = await axios.post(`${url}?source=${params.source}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return data;
        } catch (error) {

        }
    }
}
export default new Http()
