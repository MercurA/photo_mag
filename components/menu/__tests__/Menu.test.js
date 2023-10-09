import { render, screen } from '@testing-library/react'
import Menu from '../Menu'
import { AppContext } from '../../../pages'

describe('Menu', () => {
    let state = {
        isDrawerOpen: false,
        isPopupOn: false
    }
    it('should render corectly', () => {
        const comp = render(
            <AppContext.Provider value={state}>
                <Menu />
            </ AppContext.Provider>
        )

        expect(comp).toMatchSnapshot()
    })
    it('should render corectly with drawer open', () => {
        state = {
            isDrawerOpen: true,
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