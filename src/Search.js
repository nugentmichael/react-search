import React, { useState, useEffect } from 'react';

const Search = () => {
	const [results, setResults] = useState([]);
	const [searchQuery, setSearchQuery] = useState('news');
	const [url, setUrl] = useState(
		`https://www.googleapis.com/customsearch/v1?key=AIzaSyCMSAQDPcK9X64QQnA767szm0JZ1AypDPA&cx=017576662512468239146:omuauf_lfve&q=${searchQuery}`
	);
	const [loading, setLoading] = useState(false);

	const searchForm = () => (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={searchQuery}
				onChange={handleChange}
			></input>
			<button>Search</button>
		</form>
	);

	const handleChange = e => {
		setSearchQuery(e.target.value);
	};

	const handleSubmit = () => {};

	const fetchSearch = () => {
		// Set loading state to true
		setLoading(true);

		fetch(url)
			.then(results => results.json())
			// .then(data => console.log(data.items))
			.then(data => setResults(data.items))
			.catch(error => console.log(error));
	};

	useEffect(() => {
		fetchSearch();
	}, [url]);

	return (
		<div>
			{searchForm()}
			<p>Results</p>
			{results.map((result, index) => (
				<a key={index} href={result.link}>
					<h3>{result.title}</h3>
					<p>{result.snippet}</p>
				</a>
			))}
		</div>
	);
};

export default Search;
