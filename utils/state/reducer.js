export const initialState = {
    music: false,
    isDrawerOpen: false,
    isPopupOn: false,
    puzzleRezolved: false,
    imageList: {
        'black&white': [
            {
                path: '/images/arh_1.jpg',
                width: 6016,
                height: 4016
            },
            {
                path: '/images/arh_2.jpg',
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
                path: '/images/land_2.jpg',
                width: 4016,
                height: 6016
            },
            {
                path: '/images/film_1.jpg',
                width: 4492,
                height: 6774
            },
            {
                path: '/images/film_2.jpg',
                width: 4492,
                height: 6774
            },
            {
                path: '/images/film_4.jpg',
                width: 4492,
                height: 6774
            },
        ],
        'people&cities': [
            {
                path: '/images/film_1.jpg',
                width: 4492,
                height: 6774
            },
            {
                path: '/images/film_2.jpg',
                width: 4492,
                height: 6774
            },
            {
                path: '/images/film_3.jpg',
                width: 4492,
                height: 6774
            },
            {
                path: '/images/film_4.jpg',
                width: 4492,
                height: 6774
            },
            {
                path: '/images/film_5.jpg',
                width: 6774,
                height: 4492
            },
        ],
        'landscape': [
            {
                path: '/images/land_1.jpg',
                width: 6016,
                height: 4016
            },
            {
                path: '/images/land_2.jpg',
                width: 4016,
                height: 6016
            },
            {
                path: '/images/4.jpg',
                width: 6016,
                height: 4016
            },
        ]
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
    setImageCollection: 'setImageCollection',
    setPuzzleToRezolved: 'setPuzzleToRezolved' 
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
        case ACTIONS.setPuzzleToRezolved: 
            return {
                ...state,
                puzzleRezolved: action.payload
            }
        default:
            return state
    }
}