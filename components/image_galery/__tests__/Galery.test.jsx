import { render } from "@testing-library/react"
import { AppContext } from "../../../pages"
import Galery from "../Galery"

describe('Galery', () => {
    const state = {
        imageList: ['/images/1.jpg']
    }
    it('should render correctly', () => {
        const comp = render(
            <AppContext.Provider value={state}>
                <Galery imageList={state.imageList}/>
            </AppContext.Provider>
        )

        expect(comp).toMatchSnapshot()
    })
})