import React, {useContext, useState} from "react"
import "./styles.css"
import AppContainer from "./comps/AppContainer"
import StoreContextProvider from './comps/StoreContext'

function App() {
  return (
    <div className="app">
      <StoreContextProvider>
        <AppContainer />
      </StoreContextProvider>
    </div>
  )
}

export default App