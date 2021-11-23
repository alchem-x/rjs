define((require) => {
    const loadCss = require('./loadCss')
    const antd = require('https://unpkg.com/antd@4.17.1/dist/antd.min.js')
    const icons = require('https://unpkg.com/@ant-design/icons@4.7.0/dist/index.umd.min.js')

    loadCss('https://unpkg.com/antd@4.17.1/dist/antd.min.css')
    return {
        ...antd,
        ...icons,
    }
})
