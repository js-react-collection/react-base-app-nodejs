
///
/// It's a simple include of a part of document
///

//get images
import img_logo from '../images/logo.svg'

//...
export default function HeaderModule () {

    return (

        <div>
            <img src={img_logo} className="App-logo" alt="logo" />
            <h1>HELLO WORLD!</h1>
            
            <a href="./">
                home
            </a>&nbsp;&nbsp;
            <a href="./credits">
                Credits
            </a>


			{/* <button
                onClick={()=>{
				    window.location.href='/'
    			}}>

				PAGE "Home"

			</button>
			<button
                onClick={()=>{
				    window.location.href='/credits'
    			}}>

				PAGE "Credits"

			</button> */}

        </div>

    )

}