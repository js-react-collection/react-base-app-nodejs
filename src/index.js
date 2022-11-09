
import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './resources/pages/home'

const root = ReactDOM.createRoot(document.getElementsByTagName('div')[0])

root.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
)

