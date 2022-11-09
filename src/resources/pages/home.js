
//import css
import './home.css'

//an external funciton
import external_function_test from '../scripts/external_function_test.js'

//test class
import external_class_test from '../scripts/external_class_test.js'

//test for simple module
import Printheadtitles from '../components/header.js'

//an external funciton
import PropsTest from '../components/propstest.js'

//test state
import StateTest from '../components/statetest.js'


export default function Home () {

	var inner_functions_test = () => console.log("TEST 1 RUNNED!")

	var classtest = new external_class_test("mytest",10)

	var updateVal = function () { 
		// classic dom manipulation way... so, you refresh page.
		document.getElementById('classtest').innerText = classtest.getValue()
	}

	return (

		<div className="App">

			<button onClick={()=>{
				this.history.push('/link')
			}}>
				PAGE "LINK"
			</button>

			<header className="App-header">

				<Printheadtitles />

				<p>
					Edit <code>home.js</code> and save to reload.
				</p>

				<details>

					<summary>
						<p>TEST PROPS</p>
					</summary>

					<small>

						<PropsTest title="TEST01" contents="Lorem	Ipsum"/>
						<PropsTest title="TEST02" contents="Dolor sit amet"/>
						<PropsTest title="TEST03" contents="consectetur adipiscing elit"/>

					</small>

				</details>

				<details>

					<summary>
						<p>TEST STATE</p>
					</summary>

					<small>

						<StateTest />

					</small>

				</details>

				<details>

					<summary>
						<p>TEST CLASS TEST</p>
					</summary>

					<small>

						<p>Name in classtest is: {classtest.name}</p>

						<p>value of {classtest.name} is: <b id="classtest">{classtest.getValue()}</b></p>

						<button 
							onClick={()=>{ 
								classtest.increaseValue(100);
								updateVal();
							}}>

							INCRESE VALUE OF {classtest.name}

						</button>

						<button
							onClick={()=>{ 
								classtest.decreaseValue(50);
								updateVal();
							}}>

							DECREASE VALUE OF {classtest.name}

						</button>

					</small>
				</details>

				

				<details>

					<summary>
						<p>FUNCTIONS CALLING</p>
					</summary>

					<div>
						<button onClick={inner_functions_test}>
							CALL UP A INNER FUNCITON
						</button>

						<button onClick={external_function_test}>
							CALL UP AN EXTERNAL FUNCTION
						</button>
					</div>
				</details>

			</header>

		</div>

	)


}