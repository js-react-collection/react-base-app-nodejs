
///
/// Passing the a complex global properties to every provided childs
///

// import react
import React, { useState } from "react"

// import component
import ContexttestSUB01 from "./contexttestSUB01"

// export environment
export const aGlobalContextName = React.createContext() // <= it's a beauty pratic to import this

//...
export default function ContextTest (props) {

    const [objData,setObjData] = useState({
        user : "John",
        mail : "JohnWich@demo.com",
        status : "Banned"
    })
    
    return (

        <aGlobalContextName.Provider value={{objData,setObjData}}>
            <ContexttestSUB01 />
            {/* other sub components... */}
        </aGlobalContextName.Provider>

    )

}