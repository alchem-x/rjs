const githubCodeBlockJsUrl = 'https://unpkg.com/github-code-block@0.0.3/dist/index.umd.js'
const githubCodeBlockCssUrl = 'https://unpkg.com/github-code-block@0.0.3/dist/style.css'

define(['./loadCss',githubCodeBlockJsUrl], (loadCss,GitHubCodeBlock) => {
    document.dispatchEvent(new CustomEvent('AsyncTask', {
        detail: loadCss(githubCodeBlockCssUrl),
    }))
    return GitHubCodeBlock
})