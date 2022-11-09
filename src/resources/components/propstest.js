import React from 'react'

export default function PropsTest (props) {

    return (

        <div>
            <h3 style={{color: "violet"}}>{props.title}</h3>
            <p>{props.contents}</p>
        </div>

    )

}