import { render } from '@testing-library/react'
import { AppContext } from '../../../pages'
import Drawer from '../Drawer'

describe('Menu', () => {
    it('should render corectly', () => {
        const state = {
            isDrawerOpen: false,
            isPopupOn: false
        }
        const comp = render(
            <AppContext.Provider value={state}>
                <Drawer />
            </ AppContext.Provider>
        )

        expect(comp).toMatchSnapshot()
    })
})