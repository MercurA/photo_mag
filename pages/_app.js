import '../styles/globals.css'
import { createContext, useReducer } from "react"
import reducer, { initialState } from "../utils/state/reducer"

export const AppContext = createContext(null)

const MyApp = ({ Component, pageProps }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp