/**
 * strip suffix
 */
function ss(strings, ...keys) {
    return strings
        .map((s, i) => i < keys.length ? s + keys[i] : s)
        .join('')
        .replace(/\.js$/, '')
        .trim()
}

requirejs.config({
    enforceDefine: true,
    paths: {
        'immer': ss`https://unpkg.com/immer@9.0.6/dist/immer.umd.production.min.js`,
        '@emotion/css': ss`https://unpkg.com/@emotion/css@11.1.3/dist/emotion-css.umd.min.js`,
        'htm': ss`https://unpkg.com/htm@3.1.0/dist/htm.umd.js`,
        'moment': ss`https://unpkg.com/moment@2.29.1/min/moment.min.js`,
        'vue': ss`https://unpkg.com/vue@2.6.14/dist/vue.min.js`,
        'react': ss`https://unpkg.com/react@17.0.2/umd/react.production.min.js`,
        'react-dom': ss`https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js`,
    },
})

const loadCss = new Promise((resolve) => {
    addEventListener('loadCss', () => {
        resolve()
    })
})

require(['vue', './App', 'react', 'react-dom', './ExtensionApp'], (
    Vue,
    App,
    { createElement },
    { render },
    ExtensionApp,
) => {
    loadCss.then(() => {
        new Vue(App).$mount('#app')
        //
        const divRef = document.createElement('div')
        document.body.appendChild(divRef)
        render(createElement(ExtensionApp), divRef)
    })
})
