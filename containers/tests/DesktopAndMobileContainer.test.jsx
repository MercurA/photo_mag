import { render } from "@testing-library/react"
import { AppContext } from "../../pages"
import DesktopContainer from "../DesktopContainer"
import MobileContainer from "../MobileContainer"

describe('Disktop Container', () => {
    let state = {
        dispatch: () => {},
        imageList: {
            'black&white':[ 
                {
                    path: '/images/arh_1.jpg',
                    width: 6016,
                    height: 4016
                },
            ]
        },
        currentImageCollection: 'black&white'
    }
    it('should render Desktop cont correctly', () => {
        const comp = render(
            <AppContext.Provider value={state}>
                <DesktopContainer />
            </AppContext.Provider>
        )
        
        expect(comp).toMatchSnapshot()
    })

    it('should render Desktop cont correctly', () => {
        const comp = render(
            <AppContext.Provider value={state}>
                <MobileContainer />
            </AppContext.Provider>
        )
        
        expect(comp).toMatchSnapshot()
    })
})