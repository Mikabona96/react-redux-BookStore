import { Link } from 'react-router-dom'
import './shop-header.css'

const ShopHeader = ({numItems, total}) => {
	return (
		<header className="shop-header">
			<Link to="/" className="logotype">ReStore</Link>
			<Link to="/cart/" className="shopingCart">
				<i className="fas fa-shopping-cart shopingCartIcon"></i>
				{numItems} items (${total})
			</Link>
		</header>
	)
}

export default ShopHeader