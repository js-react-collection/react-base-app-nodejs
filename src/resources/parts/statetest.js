import React, {useState} from 'react'

export default function Print_box_test_state () {

    const [count,setCount] = useState(0)

    const increment = () => setCount(count+1)

    const decrese = () => setCount(count-1)

    return (

        <div>
            <h3>{count}</h3>
            <button onClick={decrese}>-</button>
            <button onClick={increment}>+</button>
        </div>

    )

}