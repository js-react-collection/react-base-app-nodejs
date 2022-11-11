
///
/// Main of react app project
///

//get react
import React from 'react'
import ReactDOM from 'react-dom/client'

// get css
import './resources/pages/style.css'

//basic route switch component
import Route from './resources/components/routing'

//pages
import Home from './resources/pages/home'
import Credits from './resources/pages/credits'

const root = ReactDOM.createRoot(document.getElementsByTagName('div')[0])

root.render(
	<React.StrictMode>
		<Route path="/credits">
			<Credits />
		</Route>
		<Route path="/">
			<Home />
		</Route>
	</React.StrictMode>
)

