define(() => {
    return (url) => {
        const linkRef = document.createElement('link')
        linkRef.rel = 'stylesheet'
        linkRef.href = url
        document.head.appendChild(linkRef)
    }
})
