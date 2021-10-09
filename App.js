define((require) => {
    const { css } = require('emotion')

    const _App = css`
      box-sizing: border-box;
      font-size: 64px;
      min-height: 100vh;
      text-align: center;
      padding: 20vh;
    `
    return {
        template: `
          <div class="${_App}">rjs</div>
        `,
    }
})