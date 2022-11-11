
///
/// a component... and simple second demo page 
///

//get components
import Printheadtitles from '../components/header.js'

//...
export default function Credits () {

    return(

        <div className="view">

            <Printheadtitles />

            <p>
                This app is a simple test created by <br/>
                <b><a href='https://bertz.tech/' target='_blank'>Alberto Marà - bertz.tech</a></b>
            </p>

        </div>
    )

}