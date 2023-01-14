import axios from "axios"
import { useEffect, useState } from "react"

export const useWeather = () => {
    const [infoWeather, setInfoWeather] = useState("Temperature and icon")
        
    const getWeather = async () => {
        const link = import.meta.env.VITE_WEATHER_API
        console.log("inicio link")
        console.log(link)
        const {data} = await axios.get(link)
        const info = {
            country: data.location.country,
            temp: data.current.temp_c,
            icon:data.current.condition.icon
        }
        setInfoWeather(info)
    }

    useEffect(()=> {
        getWeather()
    },[])
    
    return {infoWeather}

}
