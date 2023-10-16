import { render } from '@testing-library/react'
import { AppContext } from '../../../pages'
import CardImage from '../CardImage'
import CardContainer from '../CardContainer'

describe('Menu', () => {
    let state = {
        isDrawerOpen: false,
        isPopupOn: false,
        imageList: ['/images/2.jpg'],
        currentImageCollection: 'black&white'
    }

    it('should render correctly', () => {
        const comp = render(
            <AppContext.Provider value={state}>
                <CardImage image={state.imageList[0]}/>
            </ AppContext.Provider>
        )

        expect(comp).toMatchSnapshot()
    })

    it('should render correctly in the container', () => {
        const {imageList, currentImageCollection} = state
        const comp = render(
            <AppContext.Provider value={state}>
                <CardContainer>
                    {imageList[currentImageCollection]?.map((image, el) => (<CardImage image={image} key={el}/>))}
                </CardContainer>
            </ AppContext.Provider>
        )

        expect(comp).toMatchSnapshot()
    })
})