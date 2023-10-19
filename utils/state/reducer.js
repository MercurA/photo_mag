export const initialState = {
    music: false,
    isDrawerOpen: false,
    isPopupOn: false,
    imageList: {
        'black&white': [
            {
                path: '/images/1.jpg',
                width: 6016,
                height: 4016
            },
            {
                path: '/images/2.png',
                width: 6016,
                height: 4016
            },
            {
                path: '/images/3.jpg',
                width: 6016,
                height: 4016
            },
            {
                path: '/images/4.jpg',
                width: 6016,
                height: 4016
            },
            {
                path: '/images/5.png',
                width: 4016,
                height: 6016
            }
        ],
        'journalism': [],
        'landscape': []
    },
    currentImageCollection: 'black&white',
    currentImage: null
}

export const ACTIONS = {
    music: 'music',
    drawer: 'drawer',
    setImageDetails: 'setImageDetails',
    setPopupState: 'setPopupState',
    setCurrentImageToDisplay: 'setCurrentImageToDisplay',
    setImageCollection: 'setImageCollection'
}

export default function reducer(state, action) {
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
                currentImage: action.payload
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
            if(!state.imageList[action.payload].length) {
               return {
                    ...state,
                    currentImageCollection: action.payload,
                    currentImage: null
                }
            } else {
                return {
                    ...state,
                    currentImageCollection: action.payload,
                    currentImage: state.imageList[action.payload][2]
                }
            }

        default:
            return state
    }
}