requirejs.config({
    enforceDefine: true,
    paths: {
        '@emotion/css': 'https://unpkg.com/@emotion/css@11.1.3/dist/emotion-css.umd.min',
        'react': 'https://unpkg.com/react@17.0.2/umd/react.production.min',
        'react-dom': 'https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min',
        'htm': 'https://unpkg.com/htm@3.1.0/dist/htm.umd',
        'vue': 'https://unpkg.com/vue@2.6.14/dist/vue.min',
        'moment': 'https://unpkg.com/moment@2.29.1/min/moment.min'

    },
})

require(['vue', './App.js', './extension'], (Vue, App, extension) => {
    new Vue(App).$mount('#app')
    extension()
})
