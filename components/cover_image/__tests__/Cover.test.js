import {render} from '@testing-library/react'
import Cover from '../Cover'
import { AppContext } from '../../../pages/_app'

describe("Cover component", () => {
    let state = {
        currentImage: {
            path: '/images/2.png',
            alt: 'mountain view'
        }
    }
    it('should render correctly', () => {
        const comp = render(
            <AppContext.Provider value={state}>
                <Cover image={state.currentImage}/>
            </AppContext.Provider>
        )

        expect(comp).toMatchSnapshot()
    })
})