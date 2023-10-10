import { createContext, useEffect, useReducer } from "react"
import Head from "next/head"

import reducer, { initialState } from "../utils/state/reducer"
import CardContainer from "../components/card_image/CardContainer"
import Menu from "../components/menu/Menu"
import ImagePortal from "../components/card_image/ImagePortal"
import Cover from '../components/cover_image/Cover'
import { strings } from "../utils/constants"

export const AppContext = createContext(null)

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const preventDefault = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (state.isPopupOn) {
      window.addEventListener('mousewheel', preventDefault, { passive: false })
      window.addEventListener('touchmove', preventDefault, { passive: false })
    }

    return () => {
      window.removeEventListener('mousewheel', preventDefault, { passive: false })
      window.removeEventListener('touchmove', preventDefault, { passive: false })
    }
  }, [state.isPopupOn])

  return (
    <AppContext.Provider value={state}>
      <Head>
        <title>{strings.title}</title>
        <meta name="home page" content="Photo galery" />
        <meta name="keywords" content="photos, photography, hi-res, galery" />
      </Head>
      {/* <Menu dispatch={dispatch} />
      <CardContainer dispatch={dispatch} />
      {state.image && <ImagePortal dispatch={dispatch} />} */}
      <Cover image={state?.currentImage}/>
    </AppContext.Provider>
  )
}

export default Home