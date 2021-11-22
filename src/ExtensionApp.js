function withCss(css) {
    return css`
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
}

const initialState = {
    extensionModalVisible: false,
}

function reducer(state, action) {
    switch (action.type) {
        case 'open':
            return {
                ...state,
                extensionModalVisible: true,
            }
        case 'close':
            return {
                ...state,
                extensionModalVisible: false,
            }
        default:
            return state

    }
}

define((require) => {
    const { css } = require('@emotion/css')
    const { useReducer } = require('react')
    const html = require('./html')
    const { RocketOutlined } = require('./antd')
    const ExtensionModal = require('./ExtensionModal')

    const _ExtensionApp = withCss(css)

    return (props) => {

        const [state, dispatch] = useReducer(reducer, initialState)

        return html`
            <div class=${_ExtensionApp}>
                <${RocketOutlined} onClick=${() => dispatch({ type: 'open' })} className="rocket-button"/>
                <${ExtensionModal} dispatch=${dispatch} visible=${state.extensionModalVisible}/>
            </div>
        `
    }
})