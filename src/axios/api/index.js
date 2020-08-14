// import user from './user';
import Market from './Market';
const obj = {
    Market
};

export default {
    install (Vue) {
        Object.keys(obj).forEach(item => {
            Vue.prototype[`$${item}`] = obj[item];
        });
    }
};
