import React from 'react';
import { Link } from 'react-router-dom';
// import { Card } from 'react-bootstrap';
import Rating from './Rating';

const ProductItem = ({ product }) => {
	return (
		<div className="my-3 rounded d-flex flex-column border-none align-items-center mb-5 mt-5 bg-white">
			<Link to={`/product/${product._id}`}>
				<img
					className="mb-2 img-fluid mx-auto"
					src={product.image}

					// style={{ width: '100%' }}
				/>
			</Link>

			<Link to={`/product/${product._id}`}>
				<div className="text-center text-dark h5">
					<strong>{product.name}</strong>
				</div>
			</Link>
			<div className="p-2 d-flex align-items-center justify-content-around">
				<h3 className="mr-5" as="h3">
					${product.price}
				</h3>
				<Rating value={product.rating} text={`${product.numReviews} reviews`} />
			</div>
		</div>
	);
};

export default ProductItem;
