
///
/// LayoutEffect: Equal to Effect but depend of "Dom check" and not "Var check"
///

// get react
import {useState,useLayoutEffect} from 'react'

//...
export default function LayoutEffectTest () {

    const [text,textChange] = useState("...")
    const textUpdate = () => textChange( document.getElementById('sideEffect').value )

    // after change a state, do...
    useLayoutEffect(()=>{
        // do what you want...
        console.log("Layout Changed!",text)
    },[text])

    return (

        <div>
            <h3>INPUT VAL: {text}</h3>
            <input type={"text"} id={"sideEffect"} onInput={textUpdate} defaultValue={""} />
        </div>

    )

}