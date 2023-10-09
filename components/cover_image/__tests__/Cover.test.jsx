import {render} from '@testing-library/react'
import Cover from '../Cover'
import { AppContext } from '../../../pages'

describe("Cover component", () => {
    it('should render correctly', () => {
        const comp = render(
            <AppContext.Provider value={{}}>
                <Cover />
            </AppContext.Provider>
        )

        expect(comp).toMatchSnapshot()
    })
})