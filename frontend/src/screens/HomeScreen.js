import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import ProductItem from '../components/ProductItem';

const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword;

	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products, page, pages } = productList;

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	return (
		<div className="mt-5" style={{ zIndex: '0', backgroundColor: '#000000' }}>
			<Meta />
			{keyword && (
				<Link to="/" className="btn btn-light">
					Go Back
				</Link>
			)}
			<h1 className="text-center text-white">Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<div className="w-100 mx-auto mt-5 d-flex justify-content-center align-itmes-center flex-column">
					{/* <Row> */}
					{/* <Product product={product} /> */}
					{products.map((product) => (
						// <Col key={product._id} sm={12} md={12} lg={12} xl={12}>

						<ProductItem id={product._id} product={product} />
						// </Col>
					))}
					{/* </Row> */}
					{/* <div className="p-8">
					
					
					
					</div> */}
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ''}
					/>
				</div>
			)}
		</div>
	);
};

export default HomeScreen;
