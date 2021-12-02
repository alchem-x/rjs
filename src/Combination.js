const githubMarkdownCssUrl = 'https://unpkg.com/github-markdown-css@5.0.0/github-markdown.css'

define(['./loadCss', './clipboardCopy', '@emotion/css', './ClipboardCopyButton'], (
    loadCss,
    clipboardCopy,
    { css, cx },
    renderClipboardCopyButton,
) => {

    loadCss(githubMarkdownCssUrl)

    const _Combination = css`
      h3 + div {
        position: relative;
      }
    `

    return {
        template: `
          <div class="${cx('markdown-body', _Combination)}">
          <h2 id="combination">Combination</h2>

          <h3 id="react">React</h3>
          <div>
            <pre><code class="language-html" v-text="reactText"></code></pre>
          </div>

          <h3 id="vue">Vue</h3>
          <div>
            <pre><code class="language-html" v-text="vueText"></code></pre>
          </div>

          <h3 id="preact">Preact</h3>
          <div>
            <pre><code class="language-html" v-text="preactText"></code></pre>
          </div>

          <h3 id="requirejs">RequireJS</h3>
          <div>
            <pre><code class="language-html" v-text="requirejsText"></code></pre>
          </div>

          <h3 id="tailwindCss">Tailwind CSS</h3>
          <div>
            <pre><code class="language-html" v-text="tailwindCssText"></code></pre>
          </div>

          <h3 id="emotionCss">Emotion</h3>
          <div>
            <pre><code class="language-html" v-text="emotionCssText"></code></pre>
          </div>

          <h3 id="styledComponents">styled-components</h3>
          <div>
            <pre><code class="language-html" v-text="styledComponentsText"></code></pre>
          </div>

          <h3 id="githubMarkdownCss">GitHub Markdown CSS</h3>
          <div>
            <pre><code class="language-html" v-text="githubMarkdownCss"></code></pre>
          </div>

          <h3 id="antDesign">Ant Design</h3>
          <div>
            <pre><code class="language-html" v-text="antDesignText"></code></pre>
          </div>
          </div>
        `,
        computed: {
            reactText() {
                return [
                    '<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>',

                    '<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>',
                ].join('\n')
            },
            vueText() {
                return '<script src="https://unpkg.com/vue@2.6.14/dist/vue.min.js"></script>'
            },
            preactText() {
                return [
                    '<script src="https://unpkg.com/preact@10.6.2/dist/preact.umd.js"></script>',
                    '<script src="https://unpkg.com/preact@10.6.2/hooks/dist/hooks.umd.js"></script>',
                ].join('\n')
            },
            requirejsText() {
                return '<script src="https://unpkg.com/requirejs@2.3.6/require.js"></script>'
            },
            tailwindCssText() {
                return '<script src="https://unpkg.com/browse/tailwindcss@2.2.19/dist/tailwind.min.css"></script>'
            },
            emotionCssText() {
                return '<script src="https://unpkg.com/@emotion/css@11.1.3/dist/emotion-css.umd.min.js"></script>'
            },
            styledComponentsText() {
                return [
                    '<script src="https://unpkg.com/react-is@17.0.2/umd/react-is.production.min.js"></script>',
                    '<script src="https://unpkg.com/styled-components@5.3.3/dist/styled-components.min.js"></script>',
                ].join('\n')
            },
            githubMarkdownCss() {
                return '<script src="https://unpkg.com/github-markdown-css@5.0.0/github-markdown.css"></script>'
            },
            antDesignText() {
                return [
                    '<script src="https://unpkg.com/antd@4.17.1/dist/antd.min.css"></script>',
                    '<script src="https://unpkg.com/antd@4.17.1/dist/antd.min.js"></script>',
                    '<script src="https://unpkg.com/@ant-design/icons@4.7.0/dist/index.umd.min.js"></script>',
                ].join('\n')
            }
        },
        mounted() {
            this.$el.querySelectorAll('h3 + div').forEach(it => {
                const id = it.previousElementSibling.id
                renderClipboardCopyButton(it, {
                    onClick: () => clipboardCopy(this[id + 'Text']),
                })
            })
        },
    }
})