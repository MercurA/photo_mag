import { render } from '@testing-library/react'
import { AppContext } from '../../../pages'
import CardImage from '../CardImage'
import CardContainer from '../CardContainer'

describe('Menu', () => {
    let state = {
        isDrawerOpen: false,
        isPopupOn: false
    }

    it('should render correctly', () => {
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

    it('should render correctly in the container', () => {
        const images = [{
                width: 6000,
                height: 4000,
                path: '/images/2.jpg',
                alt: "cityscape"
        }]
        
        const comp = render(
            <AppContext.Provider value={state}>
                <CardContainer>
                    {images.map((image, el) => (<CardImage image={image} key={el}/>))}
                </CardContainer>
            </ AppContext.Provider>
        )

        expect(comp).toMatchSnapshot()
    })
})