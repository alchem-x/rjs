function random255() {
    return Math.trunc(256 * Math.random())
}

define((require) => {
    const { css } = require('@emotion/css')

    const _App = css`
      box-sizing: border-box;
      font-size: 64px;
      min-height: 100vh;
      text-align: center;
      padding: 20vh;

      & > span {
        border: .5rem solid;
        border-radius: 2px;
        padding: .5rem;
        font-weight: bold;
        cursor: pointer;
        font-family: sans-serif;
      }
    `
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