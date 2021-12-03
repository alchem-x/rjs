define(() => {

    return function loadCss(url) {
        return new Promise((resolve) => {
            const linkRef = document.createElement('link')
            linkRef.rel = 'stylesheet'
            linkRef.href = url
            linkRef.addEventListener('load', () => {
                resolve()
            })
            document.head.appendChild(linkRef)
        })
    }
})
