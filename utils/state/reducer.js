export const initialState = {
    music: false,
    isDrawerOpen: false,
    image: null,
    isPopupOn: false,
    imageList: {
        'black&white' : ['/images/1.jpg','/images/2.png','/images/3.jpg','/images/4.jpg','/images/5.png'],
        'journalism': [],
        'landscape': []
    },
    currentImageCollection: 'black&white',
    currentImage: '/images/2.png'
}

export const ACTIONS = {
    music: 'music',
    drawer: 'drawer',
    setImageDetails: 'setImageDetails',
    setPopupState: 'setPopupState',
    setCurrentImageToDisplay: 'setCurrentImageToDisplay',
    setImageCollection: 'setImageCollection'
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
        case ACTIONS.setCurrentImageToDisplay:
            return {
                ...state,
                currentImage: action.payload
            }
        case ACTIONS.setImageCollection:
            return {
                ...state,
                currentImageCollection: action.payload
            }
        default:
            return state
    }
}