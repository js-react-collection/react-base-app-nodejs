
///
/// Statement: It's the "status" management of value inside a components (or litterally the component contents) 
///

// get react
import React, {useState} from 'react'

//...
export default function StateTest () {

    //set a value,function to statement
    const [count,setCount] = useState(0)

    //manage the value of statement
    const increment = () => setCount(count+1)
    const decrease = () => setCount(count-1)

    return (

        <div>
            <h3>{count}</h3>
            <button onClick={decrease}>-</button>
            <button onClick={increment}>+</button>
        </div>

    )

}