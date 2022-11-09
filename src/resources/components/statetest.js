import React, {useState} from 'react'

export default function StateTest () {

    const [count,setCount] = useState(0)

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