
///
/// a component... and simple second demo page 
///

//get css
import './style.css'

//get components
import Printheadtitles from '../components/header.js'

//...
export default function Credits () {

    return(

        <div className="App">

            <header className="App-header">

                <Printheadtitles />

                <small>
                    <p>
                        This app is a simple test created by <a href='https://bertz.tech/'>Alberto Marà - bertz.tech</a>
                    </p>

                    <a href="./">
                        return to home
                    </a>

                </small>

            </header>

        </div>
    )

}