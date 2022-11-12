///
/// a component... and first demo page 
///


// function:

	// an external function
	import external_function_test from '../scripts/external_function_test.js'

	// test class
	import external_class_test from '../scripts/external_class_test.js'

// modules:

	// test for simple module
	import Printheadtitles from '../components/header.js'

	// an external funciton
	import PropsTest from '../components/propstest.js'

// hooks:

	// test state
	import StateTest from '../components/statetest.js'

	// reducer test
	import ReducerTest from '../components/reducertest.js'

	// test effect
	import EffectTest from '../components/effecttest.js'

	// test effect
	import RefTest from '../components/reftest.js'
	
	// test effect
	import ContextTest from '../components/contexttest.js'

	// test Memo
	// import MemoTest from '../components/memotest.js'


//...
export default function Home () {

	var inner_functions_test = () => console.log("TEST 1 RUNNED!")

	var classtest = new external_class_test("mytest",10)

	var updateVal = function () { 
		// classic dom manipulation way... (so, you refresh page?)
		document.getElementById('classtest').innerText = classtest.getValue()
	}

	return (

		<div className="view">

			<Printheadtitles />

			<details>

				<summary>
					<p>TEST PROPS</p>
				</summary>

				<small>

					{/* 
						In this way it's all readable and easy, but remember
						it's a good role work and pass an object, not entity.
					*/}

					<PropsTest title="TITLE 01" contents="Lorem	Ipsum"/>
					<PropsTest title="TITLE 02" contents="Dolor sit amet"/>
					<PropsTest title="TITLE 03" contents="consectetur adipiscing elit"/>

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
					<p>TEST REDUCER</p>
				</summary>

				<small>

					<ReducerTest />

				</small>

			</details>

			<details>

				<summary>
					<p>TEST EFFECT</p>
				</summary>

				<small>

					<EffectTest />

				</small>

			</details>

			<details>

				<summary>
					<p>TEST REF</p>
				</summary>

				<small>

					<RefTest />

				</small>

			</details>

			<details>

				<summary>
					<p>TEST CONTEXT</p>
				</summary>

				<small>

					<ContextTest />

				</small>

			</details>
			

			{/* <details>

				<summary>
					<p>TEST MEMO</p>
				</summary>

				<small>

					<MemoTest />

				</small>

			</details> */}
			

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

		</div>

	)


}
