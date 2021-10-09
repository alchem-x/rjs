requirejs.config({
    enforceDefine: true,
    paths: {
        vue: 'https://unpkg.com/vue@2.6.14/dist/vue.min',
        '@emotion/css': 'https://unpkg.com/@emotion/css@11.1.3/dist/emotion-css.umd.min',
    },
})

define((require) => {
    const Vue = require('vue')
    const App = require('./App.js')

    const app = new Vue({
        render: h => h(App),
    })

    app.$mount('#app')
})
