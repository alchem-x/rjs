define((require) => {
    const ReactDOM = require('react-dom')
    const React = require('react')
    const ExtensionApp = require('./ExtensionApp')

    return () => {
        const divRef = document.createElement('div')
        document.body.appendChild(divRef)
        ReactDOM.render(React.createElement(ExtensionApp), divRef)
    }
})