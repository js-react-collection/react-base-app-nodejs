
///
/// Passing the a complex properties from parent to every provided childs
///

// import react
import React, { useContext } from "react"

// import environment
import {aGlobalContextName} from "./contexttest"

//...
export default function ContexttestSUB01 () {

    const {objData,setObjData} = useContext(aGlobalContextName) 

    console.log("context is: ",objData)

    return (
        <div>
            <h3>{objData.user}</h3>
            <p>{objData.mail}</p>
            <output>{objData.status}</output>
        </div>

    )

}