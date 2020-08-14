// export default {
//     getUserInfo: {
//         desc: '获取计划详情页信息',
//         method: 'GET',
//         path: '/api/plan',
//         params: {}
//     }
// }
import http from '../core/Http'
export default {
    plan: {
        getMarketsPlanIndex: params => http.get('/markets/plan/index', params),
        getMarketsPlanUpdate: params => http.update('/markets/plan/update', params),
    }
}
