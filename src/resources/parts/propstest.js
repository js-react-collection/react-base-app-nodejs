import React from 'react'

export default function print_box_props (props) {

    return (

        <div>
            <h3 style={{color: "violet"}}>{props.title}</h3>
            <p>{props.contents}</p>
        </div>

    )

}