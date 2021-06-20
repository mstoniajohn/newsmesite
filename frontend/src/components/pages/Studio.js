import React from 'react';
import MaterialUIPickers from '../parts/MaterialUIPickers';

const Studio = () => {
	return (
		<div>
			<h1>Studio</h1>
			<div>
				<a
					id="app-scheduling"
					href="#"
					className="custom_button btn-simple active templates_color"
					style={{
						textAlign: 'center',
						display: 'block',
						cursor: 'pointer',
						border: '2px solid rgb(231, 231, 231)',
						width: '200px',
						maxHeight: '50px',
						padding: '8px 16px',
						backgroundColor: 'rgb(70, 155, 198)',
						color: 'rgb(255, 255, 255)',
						fontSize: '17px',
						fontWeight: ' normal',
						textDecoration: 'none',
						borderRadius: '2px',
					}}
					alt="Booknow button"
					target="_blank"
					datadomainname="https://smeliestyle.bookafy.com/"
				>
					Book Now
				</a>
			</div>
		</div>
	);
};

export default Studio;
