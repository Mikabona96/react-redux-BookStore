import { Link } from 'react-router-dom';
import './shop-header.css'


const ShopHeader = ({numItems, total}) => {
	return (
		<header className="shop-header">
			<Link to="/" className="logo text-dark">BookStore</Link>
			<Link to="/cart" className="shopping-cart">
				<i className="fas fa-shopping-cart cart-icon"></i>
				{numItems} items (${total})
			</Link>
		</header>
	)
}

export default ShopHeader;