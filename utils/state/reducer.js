export const initialState = {
    music: false,
    isDrawerOpen: false,
    image: null,
    isPopupOn: false,
}

export const ACTIONS = {
    music: 'music',
    drawer: 'drawer',
    setImageDetails: 'setImageDetails',
    setPopupState: 'setPopupState',
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
        case ACTIONS.setImageDetails:
            return {
                ...state,
                image: action.payload
            }
        case ACTIONS.setPopupState:
            return {
                ...state,
                isPopupOn: action.payload
            }
        default:
            return state
    }
}