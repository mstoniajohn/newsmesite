import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBox = ({ history }) => {
	const [keyword, setKeyword] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push('/');
		}
	};

	return (
		<Form
			className="position-relative"
			style={{ zIndex: '1' }}
			onSubmit={submitHandler}
			inline
		>
			<Form.Control
				type="text"
				name="q"
				style={{ fontSize: '16px !important', backgroundColor: '#000000' }}
				onChange={(e) => setKeyword(e.target.value)}
				placeholder="Search Products..."
				className="mr-sm-2 ml-sm-5 mb-2 mt-2 rounded border-0 w-100"
			></Form.Control>
			{/* <input type="submit" /> */}

			<Button
				style={{ right: '0%', zIndex: '9' }}
				className="position-absolute rounded"
				type="submit"
				variant="transparent"
			>
				<AiOutlineSearch className=" text-danger h4 mt-2" />
			</Button>
		</Form>
	);
};

export default SearchBox;
