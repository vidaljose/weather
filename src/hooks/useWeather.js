import axios from "axios"
import { useEffect, useState } from "react"

export const useWeather = (place) => {
    const [infoWeather, setInfoWeather] = useState("Temperature and icon")
    const [placeState,setPlaceState] = useState(place)
        
    const getWeather = async () => {
        const link = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${placeState}&aqi=no`
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

    const setPlace = (data) =>{
        if (data) {
            setPlaceState(data)
        }
    }

    useEffect(()=> {
        getWeather()
    },[placeState])
    
    return {infoWeather,setPlace,placeState}

}
