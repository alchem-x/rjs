define(() => {

    return function loadCss(url) {
        return new Promise((resolve, reject) => {
            const linkRef = document.createElement('link')
            linkRef.rel = 'stylesheet'
            linkRef.href = url
            linkRef.addEventListener('load', (ev) => {
                resolve(ev)
            })
            linkRef.addEventListener('error', (err) => {
                reject(err)
            })
            document.head.appendChild(linkRef)
        })
    }
})
