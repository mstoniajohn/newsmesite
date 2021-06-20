import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import Loader from './Loader';
// import Message from './Message';
import { slides } from './data';

const HomeCarousel = () => {
	// const dispatch = useDispatch();

	// const productTopRated = useSelector((state) => state.productTopRated);
	// const { loading, error, products } = productTopRated;

	// useEffect(() => {
	// 	dispatch(listTopProducts());
	// }, [dispatch]);

	return (
		<Carousel pause="hover" className="bg-transparent text-dark">
			{slides.map((slide) => (
				<Carousel.Item key={slide.id}>
					<Link to={slide.url}>
						<Image src={slide.image} alt={slide.header} fluid />
						<Carousel.Caption className="carousel-caption">
							<h2>{slide.header}</h2>
							<p>
								Find out more <Link to={slide.url}>{slide.header}</Link>
							</p>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default HomeCarousel;
