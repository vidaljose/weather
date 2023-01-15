import { TempAndIcon } from "./components/TempAndIcon"
import { WeatherInput } from "./components/WeatherInput"
import { StateGlobal } from "./context/StateGlobal"

export const Weather = () => {
    return (
        <StateGlobal>
            <WeatherInput />
            <TempAndIcon />
        </StateGlobal>
    )
}