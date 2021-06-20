import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
// import HomeCarousel from './HomeCarousel';

const SmeHome = () => {
	return (
		<>
			<Jumbotron style={{ background: '#fff' }}>
				<h1>Welcome to AntiqueLee</h1>
				<h2>A place for the best antique products</h2>
				<p>
					This is a simple hero unit, a simple jumbotron-style component for
					calling extra attention to featured content or information.
				</p>
				<p>
					<Link to="/shop" className="btn btn-dark rounded">
						Shop Now
					</Link>
				</p>
			</Jumbotron>
			<div class="container">
				<div className="row">
					<div className="col-sm">
						<Link to="/studio" style={{ textDecoration: 'none' }}>
							<h2>Studio</h2>
							<div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
								tempore distinctio, eius saepe aut nostrum voluptatem voluptas,
								ad, laborum quod illo facere. Repellendus, quaerat totam.
								Voluptas beatae facere iste ipsa?
							</div>
						</Link>
					</div>
					<div className="col-sm">
						<h2>Our Store</h2>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
							tempore distinctio, eius saepe aut nostrum voluptatem voluptas,
							ad, laborum quod illo facere. Repellendus, quaerat totam. Voluptas
							beatae facere iste ipsa?
						</div>
					</div>
					<div className="col-sm">
						<h2>About Us</h2>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
							tempore distinctio, eius saepe aut nostrum voluptatem voluptas,
							ad, laborum quod illo facere. Repellendus, quaerat totam. Voluptas
							beatae facere iste ipsa?
						</div>
					</div>
				</div>
			</div>
			{/* <HomeCarousel /> */}
		</>
	);
};

export default SmeHome;
