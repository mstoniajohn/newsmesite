import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<Card className="my-3 rounded d-flex flex-column border-none">
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} variant="top" width="400" />
			</Link>

			<Card.Body className="p-2">
				<Link to={`/product/${product._id}`}>
					<Card.Title as="div" className="text-center h-2">
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text
					as="div"
					className="p-2 d-flex align-items-center justify-content-around"
				>
					<Card.Text as="h3">${product.price}</Card.Text>
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
