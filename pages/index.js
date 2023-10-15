import { createContext, useEffect, useReducer } from "react"
import Head from "next/head"

import reducer, { initialState } from "../utils/state/reducer"
import Cover from '../components/cover_image/Cover'
import { strings } from "../utils/constants"
import Galery from "../components/image_galery/Galery"

export const AppContext = createContext(null)

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={state}>
      <Head>
        <title>{strings.title}</title>
        <meta name="home page" content="Photo galery" />
        <meta name="keywords" content="photos, photography, hi-res, galery" />
      </Head>
      <Galery dispatch={dispatch}/>
      <Cover image={state?.currentImage} />
    </AppContext.Provider>
  )
}

export default Home