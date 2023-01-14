import axios from "axios"
import { useEffect, useState } from "react"

export const useWeather = () => {
    const [infoWeather, setInfoWeather] = useState("Temperature and icon")
        
    const getWeather = async () => {
        const link = `http://api.weatherapi.com/v1/current.json?key=69ea7007ce5e44208ce131139231401&q=Caracas&aqi=no`
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
