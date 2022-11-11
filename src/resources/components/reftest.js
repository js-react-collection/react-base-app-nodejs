
///
/// Ref: It's the indipendet render object for value of component 
///

// get react
import { useState, useEffect, useRef } from 'react'

//...
export default function RefTest() {

    const myInput = useRef(null)
    const myContainer = useRef(null)
    const updateCount = useRef(1)

    const [ text, textChange ] = useState("...")
    const textUpdate = () => textChange(myInput.current.value)

    useEffect(() => {
        updateCount.current++
        myContainer.current.innerHTML = "This is a correct way to get element before the return! (" + text + ")"
        // this is an exemple, do not use "innerHTML". You can (you must) use a mod the variable and print it with ex: {newText}
    })

    return (

        <div>
            <h3>INPUT VAL: {text}</h3>
            <input type={"text"} ref={myInput} onInput={textUpdate} defaultValue={""} />
            <p>Number of render: {updateCount.current}</p>
            <p ref={myContainer}></p>
        </div>

    )

}
