export const initialState = {
    music: false,
    isDrawerOpen: false
}

export const ACTIONS = {
    music: 'music',
    drawer: 'drawer'
}

export default function reducer (state, action) {
    switch (action.type) {
        case ACTIONS.music:
            return {
                ...state,
                music: !state.music
            }
        case ACTIONS.drawer:
            return {
                ...state,
                isDrawerOpen: !state.isDrawerOpen
            }
        default:
            return state
    }
}