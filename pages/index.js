import { createContext, useReducer } from "react";
import CardContainer from "../components/card_image/CardContainer";
import Menu from "../components/menu/Menu";
import MusicContainer from "../components/music/MusicContainer";
import reducer, { initialState } from "../utils/state/reducer";

export const AppContext = createContext(null)

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={state}>
      <div >
        <Menu dispatch={dispatch}/>
        <CardContainer />
        <MusicContainer dispatch={dispatch}/>
      </div>
    </AppContext.Provider>
  )
}
