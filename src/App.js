function random255() {
    return Math.trunc(256 * Math.random())
}

define(['@emotion/css', './Combination'], ({ css }, Combination) => {

    const _App = css`
      box-sizing: border-box;
      font-size: 4rem;
      min-height: 100vh;
      margin: 0 auto;
      padding: 1rem;
      max-width: calc(1000px + 1rem);

      & > span.rjs {
        box-sizing: border-box;
        border-width: .5rem;
        border-style: solid;
        border-radius: 2px;
        transition: color 150ms ease;
        padding: .5rem;
        font-weight: bold;
        cursor: pointer;
        font-family: sans-serif;
        user-select: none;
      }

      & > .combination {
        margin-top: .5rem;
      }
    `

    return {
        template: `
          <div class="${_App}">
          <span class="rjs" :style="textStyle" @click="setRandomColor">rjs</span>
          <Combination class="combination"/>
          </div>
        `,
        components: { Combination, },
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