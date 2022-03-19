fetch('./loadJs.js').then((it) => {
    return it.text()
}).then((it) => {
    let loadJs

    new Function('define', it)((factory) => {
        loadJs = factory()
    })
    return loadJs('https://unpkg.com/requirejs@2.3.6/require.js')
}).then(() => {

    function ss(strings, ...keys) {
        return strings.map((s, i) => s + (keys[i] ?? '')).join('').replace(/\.js$/, '')
    }

    requirejs.config({
        enforceDefine: true,
        paths: {
            'immer': ss`https://unpkg.com/immer@9.0.6/dist/immer.umd.production.min.js`,
            '@emotion/css': ss`https://unpkg.com/@emotion/css@11.1.3/dist/emotion-css.umd.min.js`,
            'htm': ss`https://unpkg.com/htm@3.1.0/dist/htm.umd.js`,
            'moment': ss`https://unpkg.com/moment@2.29.1/min/moment.min.js`,
            'vue': ss`https://unpkg.com/vue-umd@3.2.31/dist/vue.umd.js`,
            'react': ss`https://unpkg.com/react@17.0.2/umd/react.production.min.js`,
            'react-dom': ss`https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js`,
        },
    })

    // Async Task
    const asyncTaskList = []

    asyncTaskList.handleAsyncTask = (ev) => {
        if (ev.detail instanceof Promise) {
            asyncTaskList.push(ev.detail)
        }
    }

    document.addEventListener('AsyncTask', asyncTaskList.handleAsyncTask)

    // main
    require(['vue', './App', 'react', 'react-dom', './ExtensionApp'], (
        { createApp },
        App,
        { createElement },
        { render },
        ExtensionApp,
    ) => {

        Promise.all(asyncTaskList).then(() => {
            document.removeEventListener('AsyncTask', asyncTaskList.handleAsyncTask)
            asyncTaskList.length = 0
            //
            createApp(App).mount('#app')
            //
            const divRef = document.createElement('div')
            document.body.appendChild(divRef)
            render(createElement(ExtensionApp), divRef)
        })
    })
})
