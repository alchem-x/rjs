define((require) => {
    const React = require('react')
    const htm = require('htm')
    return htm.bind(React.createElement)
})