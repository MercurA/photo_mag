import { createContext, useEffect, useReducer } from "react"
import Head from "next/head"

import reducer, { initialState } from "../utils/state/reducer"
import { strings } from "../utils/constants"
import DesktopContainer from "../containers/DesktopContainer"
import MobileContainer from "../containers/MobileContainer"

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


  return (
    <AppContext.Provider value={{...state, dispatch}}>
      <Head>
        <title>{strings.title}</title>
        <meta name="home page" content="Photo galery" />
        <meta name="keywords" content="photos, photography, hi-res, galery" />
      </Head>
      {isMobileDevice ? <MobileContainer dispatch={dispatch} /> : <DesktopContainer dispatch={dispatch} />}
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