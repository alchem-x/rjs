define(['./html', 'react', '@emotion/css', './antd', './store', './ExtensionModal',], (
    html,
    { useReducer },
    { css },
    { RocketOutlined },
    { reducer, initialState },
    ExtensionModal
) => {
    const _ExtensionApp = css`
      position: fixed;
      right: 20px;
      top: 20px;

      .rocket-button {
        font-size: 3rem;
        cursor: pointer;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.10);
        padding: 4px;
        border-radius: 4px;
        transition: all 200ms ease-in-out;
        will-change: transform;

        :hover {
          background-color: #1890FF;
          color: #fff;
          transform: scale(1.1);
        }
      }
    `

    return () => {
        const [state, dispatch] = useReducer(reducer, initialState)

        return html`
            <div class=${_ExtensionApp}>
                <${RocketOutlined} onClick=${() => dispatch({ type: 'open' })} className="rocket-button"/>
                <${ExtensionModal} dispatch=${dispatch} state=${state}/>
            </div>
        `
    }
})