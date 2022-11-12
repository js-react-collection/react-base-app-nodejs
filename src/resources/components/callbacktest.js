
///
/// Callback: call action from useEffect 
///

// get react
import { useState, useEffect, useCallback, useRef } from 'react'

//...
export default function CallbackTest () {


    const mytextelement = useRef(null)
    const [text_val,text_state] = useState(null)
    const text_state_update = () => text_state( mytextelement.current.value )

    /*---*/

    var num = 2
    const [result,setResult] = useState(2)
    const updateResult = useCallback( () => num=num*2 , [num] )

    useEffect(()=>{
        setResult( updateResult )
    },[text_val])

    return (

        <div>
            <h3>DOT VALUE: {result}</h3>
            <hr />
            <h3>INPUT VAL: {text_val}</h3>
            <input type={"text"} ref={mytextelement} onInput={text_state_update} defaultValue={""} />
        </div>

    )

}