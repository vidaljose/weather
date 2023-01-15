import { useState } from "react"
import { Context } from "./context"
import { useWeather } from "../hooks/useWeather"

export const StateGlobal = ({ children }) => {
    const [stateData, setStateData] = useState("gato")
    const { infoWeather, setPlace,placeState } = useWeather("Caracas")

    return (
        <Context.Provider value={{
            stateData,
            setStateData,
            infoWeather,
            setPlace,
            placeState
        }} >
            {children}
        </Context.Provider >)

}