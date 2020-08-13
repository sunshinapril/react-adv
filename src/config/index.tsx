// 全局的系统配置
const SystemConfig = {
    development: {
       advDomain: 'http://qa3-adv.qttcs.cn',
       loginDomain: 'http://qa-passport.aiclk.com',
       apiDomain: 'http://test-am-api.aiclk.com'
    },
    test: {
       advDomain: '//qa3-adv.qttcs.cn',
       loginDomain: '//qa-passport.aiclk.com',
       apiDomain: '//test-am-api.aiclk.com'
    },
    pre: {
       advDomain: '//staging.aiclk.com',
       loginDomain: '//pre-login.aiclk.com',
       apiDomain: '//pre-am-api.aiclk.com'
    },
    production: {
       advDomain: '//adv.aiclk.com',
       loginDomain: '//login.aiclk.com',
       apiDomain: '//am-api.aiclk.com'
    }
}

export default SystemConfig
