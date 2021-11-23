define(['immer'], ({ produce }) => {

    const reducers = {
        open(state, action) {
            return produce(state, (draft) => {
                draft.modalVisible = true
            })
        },
        close(state, action) {
            return produce(state, (draft) => {
                draft.modalVisible = false
            })
        },
    }

    return {
        initialState: {
            modalVisible: false,
        },
        reducer(state, action) {
            const handle = reducers[action.type]
            return typeof handle === 'function' ? handle(state, action) : state
        },
    }
})