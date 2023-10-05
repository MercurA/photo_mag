import { render } from '@testing-library/react'
import { AppContext } from '../../../pages'
import CardImage from '../CardImage'

describe('Menu', () => {
    let state = {
        isDrawerOpen: false,
        isPopupOn: false
    }
    it('should render corectly', () => {
        const image = {
                width: 6000,
                height: 4000,
                path: '/images/2.jpg',
                alt: "cityscape"
        }
        const comp = render(
            <AppContext.Provider value={state}>
                <CardImage image={image}/>
            </ AppContext.Provider>
        )

        expect(comp).toMatchSnapshot()
    })
})