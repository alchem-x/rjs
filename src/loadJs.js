define(() => {

    return function loadJs(url, module = false) {
        return new Promise((resolve, reject) => {
            const scriptRef = document.createElement('script')
            scriptRef.src = url
            if (module) {
                scriptRef.type = 'module'
            }
            scriptRef.addEventListener('load', (ev) => {
                resolve(ev)
            })
            scriptRef.addEventListener('error', (err) => {
                reject(err)
            })
            document.body.appendChild(scriptRef)
        })
    }
})
