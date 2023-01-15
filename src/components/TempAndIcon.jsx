import { useContext } from "react"
import { Context } from "../context/context"

export const TempAndIcon = () => {
    
    const {stateData,infoWeather,placeState} = useContext(Context)

    return (
        <div>
            {infoWeather && <>
                <h3>{infoWeather.country}</h3>
                <h3>{infoWeather.temp}</h3>
                <h3>Lugar: {placeState}</h3>
                <img src={infoWeather.icon} />
            </>}
        </div>
    )
}