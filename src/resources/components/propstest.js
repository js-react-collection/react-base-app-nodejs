
///
/// Passing the properties from parent to child component
///

//...
export default function PropsTest (props) {

    return (

        <div>
            <h3 style={{color: "violet"}}>{props.title}</h3>
            <p>{props.contents}</p>
        </div>

    )

}