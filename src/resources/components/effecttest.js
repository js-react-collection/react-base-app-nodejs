
///
/// Effect: It's the possible actions after component state change 
///

// get react
import {useState,useEffect} from 'react'

//...
export default function EffectTest () {

    const [text,textChange] = useState("...")
    const textUpdate = () => textChange( document.getElementById('sideEffect').value )

    // after change a state, do...
    useEffect(()=>{
        // do what you want...
        console.log("Changed!",text)
    },[text])

    return (

        <div>
            <h3>INPUT VAL: {text}</h3>
            <input type={"text"} id={"sideEffect"} onInput={textUpdate} defaultValue={""} />
        </div>

    )

}