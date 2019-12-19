import React from 'react'
import Store from "./store"
import {Provider} from "react-redux"
import WeatherComponent from "./App"

function App(){
    return(
        <Provider store={Store}>
            <WeatherComponent/>
            </Provider>
    )

}
export default App