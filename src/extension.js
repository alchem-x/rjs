define(['react', 'react-dom', './ExtensionApp'], (React, ReactDOM, ExtensionApp) => {

    return () => {
        const divRef = document.createElement('div')
        document.body.appendChild(divRef)
        return ReactDOM.render(React.createElement(ExtensionApp), divRef)
    }
})
