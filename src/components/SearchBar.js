import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search?q=${keyword}`);
		e.target.reset();
		e.target.firstChild.blur();
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="search" placeholder="Search..." onChange={e => setKeyword(e.target.value)}/>
		</form>
  	)
}

export default SearchBar