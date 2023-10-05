import { render, screen } from '@testing-library/react'
import Menu from '../Menu'
import { AppContext } from '../../../pages'

describe('Menu', () => {
    it('should render corectly', () => {
        const state = {
            isDrawerOpen: false,
            isPopupOn: false
        }
        const comp = render(
            <AppContext.Provider value={state}>
                <Menu />
            </ AppContext.Provider>
        )

        expect(comp).toMatchSnapshot()
    })
})