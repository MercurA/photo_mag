import { createContext, useEffect, useReducer } from "react";

import CardContainer from "../components/card_image/CardContainer";
import Menu from "../components/menu/Menu";
import MusicContainer from "../components/music/MusicContainer";
import reducer, { initialState } from "../utils/state/reducer";
import ImagePortal from "../components/card_image/ImagePortal";
import Head from "next/head";

export const AppContext = createContext(null)

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const preventDefault = (e) => {
    e.preventDefault()
  }
  
  useEffect(() => {
    if(state.isPopupOn) {
      window.addEventListener('mousewheel', preventDefault, { passive: false });
      window.addEventListener('touchmove', preventDefault, { passive: false });
    }
    
    return () => {
      window.removeEventListener('mousewheel', preventDefault, { passive: false });
      window.removeEventListener('touchmove', preventDefault, { passive: false });
    }
  },[state.isPopupOn])

  return (
    <AppContext.Provider value={state}>
      <Head>
        <title>{"Horea's Photography"}</title>
        <meta name="home page" content="Photo galery"/>
        <meta name="keywords" content="photos, photography, hi-res, galery"/>
      </Head>
      <div >
        <Menu dispatch={dispatch} />
        <CardContainer dispatch={dispatch} />
        <MusicContainer dispatch={dispatch} />
        {state.image && <ImagePortal dispatch={dispatch}/>}
      </div>
    </AppContext.Provider>
  )
}

export default Home