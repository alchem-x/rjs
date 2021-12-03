const antdJsUrl = 'https://unpkg.com/antd@4.17.1/dist/antd.min.js'
const antdCssUrl = 'https://unpkg.com/antd@4.17.1/dist/antd.min.css'
const antdIconsUrl = 'https://unpkg.com/@ant-design/icons@4.7.0/dist/index.umd.min.js'

define(['./loadCss', antdJsUrl, antdIconsUrl], (loadCss, antd, icons) => {
    const _ = loadCss(antdCssUrl)
    return { ...antd, ...icons, }
})
