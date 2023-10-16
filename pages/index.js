import { createContext, useEffect, useReducer } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import reducer, { initialState } from "../utils/state/reducer"
import Cover from '../components/cover_image/Cover'
import { strings } from "../utils/constants"
import Galery from "../components/image_galery/Galery"
import CardContainer from '../components/card_image/CardContainer'
import ImagePortal from '../components/card_image/ImagePortal'
import Menu from "../components/menu/Menu"

export const AppContext = createContext(null)

const Home = ({ isMobileDevice }) => {
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

  const renderForMobiles = () => (
    <>
      <Menu dispatch={dispatch} />
      <CardContainer dispatch={dispatch} />
      {state.image && <ImagePortal dispatch={dispatch} />}
    </>
  )

  const renderForPC = () => (
    <>
      <Galery dispatch={dispatch} />
      <Cover image={state?.currentImage} />
    </>
  )

  return (
    <AppContext.Provider value={state}>
      <Head>
        <title>{strings.title}</title>
        <meta name="home page" content="Photo galery" />
        <meta name="keywords" content="photos, photography, hi-res, galery" />
      </Head>
      {isMobileDevice ? renderForMobiles() : renderForPC()}
    </AppContext.Provider>
  )
}

Home.getInitialProps = ({ req }) => {
  const userAgent = req.headers['user-agent']

  const isMobileDevice =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  return { isMobileDevice }
}


export default Home