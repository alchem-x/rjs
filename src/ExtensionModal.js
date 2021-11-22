define((require) => {
    const html = require('./html')
    const { Modal } = require('./antd')

    return (props) => {

        const modalProps = {
            title: 'ExtensionModal',
            footer: null,
            visible: props.visible,
            width: 1000,
            onCancel() {
                props.dispatch({ type: 'close' })
            },
        }

        return html`
            <${Modal} ...${modalProps}>
                ExtensionModal
            </Modal>
        `
    }
})