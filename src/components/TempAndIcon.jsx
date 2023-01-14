import { useWeather } from "../hooks/useWeather"

export const TempAndIcon = () => {
    const {infoWeather} = useWeather()

    return (
        <div>
            {infoWeather && <>
                <h3>{infoWeather.country}</h3>
                <h3>{infoWeather.temp}</h3>
                <img src={infoWeather.icon} />
            </>}
        </div>
    )
}