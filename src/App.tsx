import React from "react"
import Dashboard from "./pages/Dashboard";
import "./shared/styles/index.css"
import {Provider} from "react-redux";
import store from "./store/store";
function App() {

  return (
      <Provider store={store}>
        <Dashboard/>
      </Provider>
  )
}

export default App
