
///
/// Statement: It's the "status" management of value inside a components (or litterally the component contents) 
///

// get react
import {useReducer} from 'react'

//...
export default function RedcerTest () {

    // set a actions types for mod a state
    const reduct = (stateOfnumber,action) =>{

        switch (action.type) {

            case 'add':
                return stateOfnumber + 1
        
            case 'sub':
                return stateOfnumber - 1
    
            case 'reset':
                return 0

            default:
                return stateOfnumber
        }

    }

    // dispatch an asset actions for mod a stateOfnumber
    const startValue = 0
    const [stateOfnumber,dispatch] = useReducer(reduct, startValue)

    return (

        <div>
            <h3>{stateOfnumber}</h3>
            <button onClick={()=>{dispatch({type:"sub"})}}>-</button>
            <button onClick={()=>{dispatch({type:"add"})}}>+</button>
            <button onClick={()=>{dispatch({type:"reset"})}}>⦻</button>
        </div>

    )

}