
//import css
import './home.css'

//an external funciton
import external_function_test from './resources/scripts/external_function_test.js'

//test for simple module
import Printheadtitles from './resources/parts/header.js'

//an external funciton
import Print_box_props from './resources/parts/propstest.js'

//test state
import Print_box_test_state from './resources/parts/statetest.js'


export default function Home () {

	let test_1 = () => console.log("TEST 1 RUNNED!")

	return (

		<div className="App">

			<header className="App-header">

				<Printheadtitles />

				<p>
					Edit <code>src/home.js</code> and save to reload.
				</p>

				<details>
					<summary>
						<p>TEST PROPS</p>
					</summary>
					<small>

						<Print_box_props title="TEST01" contents="Lorem	Ipsum"/>
						<Print_box_props title="TEST02" contents="Dolor sit amet"/>
						<Print_box_props title="TEST03" contents="consectetur adipiscing elit"/>

					</small>
				</details>

				<details>
					<summary>
						<p>TEST STATE</p>
					</summary>
					<small>

						<Print_box_test_state />

					</small>
				</details>


				<button onClick={test_1}>
					CALL UP A INNER MODULE
				</button>

				<button onClick={external_function_test}>
					CALL UP AN EXTERNAL FUNCTION
				</button>

			</header>

		</div>

	)


}
