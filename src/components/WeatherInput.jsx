import { useContext, useState } from "react"
import { Context } from "../context/context"

export const WeatherInput = () => {
    const { stateData, setStateData,setPlace } = useContext(Context)
    const [textInput, setTextInput] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault()
        setStateData(textInput)
        setPlace(textInput)
        setTextInput("")
    }

    const handleInput = (event) => {
        setTextInput(event.target.value)
    }

    const handleButton = () =>{
        setStateData(textInput)
    }

    return (<>
    <form onSubmit={handleSubmit}>
        <input
            value={textInput}
            onChange={handleInput} />
        <button className="buttonAdd" onClick={handleButton}>add</button>

    </form>
    </>)
}