function random255() {
    return Math.trunc(256 * Math.random())
}

function withCss(css) {
    return css`
      box-sizing: border-box;
      font-size: 64px;
      min-height: 100vh;
      text-align: center;
      padding: 25vh;

      & > span {
        box-sizing: border-box;
        border-width: .5rem;
        border-style: solid;
        border-radius: 2px;
        transition: color 150ms ease;
        padding: .5rem;
        font-weight: bold;
        cursor: pointer;
        font-family: sans-serif;
      }
    `
}

define(function App(require) {
    const { css } = require('@emotion/css')

    const _App = withCss(css)

    return {
        template: `
          <div class="${_App}">
          <span :style="textStyle" @click="setRandomColor">rjs</span>
          </div>
        `,
        data() {
            return {
                color: '',
            }
        },
        mounted() {
            this.setRandomColor()
        },
        computed: {
            textStyle() {
                return `color: ${this.color};`
            }
        },
        methods: {
            setRandomColor() {
                this.color = `rgb(${random255()},${random255()},${random255()})`
            },
        }
    }
})