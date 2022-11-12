
///
/// Memo: check if object of component is really changed or not 
///

// get react
import { useState, useRef, useMemo, useEffect } from 'react'

//...
export default function MemoTest() {

    const updateCount = useRef(1)

    const [ countOne, setCountOne ] = useState(0)
    const [ countTwo, setCountTwo ] = useState(0)

    const incrementFirts = () => setCountOne( countOne + 1 )
    const incrementSecond = () => setCountTwo( countTwo + 1 )

    // in this way you refresh every time
    // const checkIt = () => {
    //     updateCount.current++
    //     return countOne % 2 == 0
    // }

    const checkIt = useMemo(() => {
        updateCount.current++
        return countOne % 2 == 0
    }, [ countOne ])

    useEffect(() => {
        console.log("clicked update memo N: "+updateCount.current++, countOne, countTwo)
    }, [ countOne, countTwo ])

    return (

        // without memo, if you change the value in the second component it will update 
        // (even if it hasn't changed!). This has a drop in rendering and performance.

            <div>
            {/* in wrong way:  */}
            {/* <h3>INPUT VAL 01: {countOne} ( { checkIt() ? 'ODD' : 'EVEN'} )</h3> */}

            {/* in correct way: */}
            <h3>INPUT VAL 01: {countOne} ( { checkIt ? 'ODD' : 'EVEN'} )</h3>
            
            <h3>INPUT VAL 02: {countTwo}</h3>
            <button onClick={incrementFirts}>add on first</button>
            <button onClick={incrementSecond}>add on second</button>
        </div>

    )

}