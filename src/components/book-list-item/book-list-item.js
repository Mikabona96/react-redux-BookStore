import './book-list-item.css'

const BookListItem = ({book, onAddedToCart}) => {
	const {id, title, author, price, coverImage} = book;
	return (
		<div className="book-list-item">
			<div className="book-cover">
				<img src={coverImage} alt="" />
			</div>
			<div className="book-details">
				<span className="book-title book-details-item">{title}</span>
				<span className="book-author book-details-item">{author}</span>
				<span className="book-price book-details-item">${price}</span>
				<button className="btn btn-primary add-to-cart" onClick={() => onAddedToCart(id)}>Add to cart</button>
			</div>
		</div>
	)
}

export default BookListItem