import { render } from '@testing-library/react'
import { AppContext } from '../../../pages/_app'
import Drawer from '../Drawer'

describe('Menu', () => {
    let state = {
        isDrawerOpen: false,
        isPopupOn: false
    }
    it('should render corectly', () => {
        const comp = render(
            <AppContext.Provider value={state}>
                <Drawer />
            </ AppContext.Provider>
        )

        expect(comp).toMatchSnapshot()
    })
})