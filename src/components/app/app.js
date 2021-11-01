import { Route, Switch } from 'react-router'
import CartPage from '../pages/cartPage'
import HomePage from '../pages/homePage'
import ShopHeader from '../shop-header/shop-header'

import './app.css'

const App = () => {
	return (
		<main role="main" className="container">
			<ShopHeader numItems={5} total={210} />
			<Switch>
			<Route path='/' component={HomePage} exact/>
			<Route path='/cart/' component={CartPage} />
		</Switch>
		</main>
	)
}

export default App