
///
/// Memo: check if objet of component is really changed or not 
///

// get react
import {useState,useEffect,useMemo} from 'react'

//...
export default function MemoTest () {

    // var myObj = {
    //     slot:'slot_01',
    //     text:'This is test'
    // }

    // var [ myObj.text, setText ] = useState("...")


    // // after change a state, do...
    // useEffect(()=>{
    //     // do what you want...
    //     console.log("Changed!",myObj.text)
    // },[myObj.text])

    // return (

    //     // without memo, if you change the select value
    //     // the component have a complete refresh. This
    //     // have a drop into useEffect and That'wrong
    //     // because we need a refresh only for text!

    //     <div>
    //         <h3>INPUT VAL: {text}</h3>
    //         <input type={"text"} id={"sideEffect"} onInput={ e => setText(e.value) } defaultValue={"This is test"} />
    //     </div>

    // )

}