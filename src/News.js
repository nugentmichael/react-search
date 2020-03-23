import React, { useState, useEffect } from 'react';

const Search = () => {
	const [results, setResults] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [url, setUrl] = useState();

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

	const handleSubmit = e => {
		e.preventDefault();
		setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
	};

	const fetchSearch = () => {
		fetch(url)
			.then(results => results.json())
			// .then(data => setResults(data.hits))
			.then(data => {
				console.log(data.hits);
				setResults(data.hits);
			})
			.catch(error => console.log(error));
	};

	useEffect(() => {
		if (url) {
			fetchSearch();
		}
	}, [url]);

	const displayResults = () =>
		results.map((result, index) => (
			<div key={index}>
				<a href={result.url}>
					<h3>{result.title}</h3>
				</a>
				<p>{result.story_text}</p>
			</div>
		));

	return (
		<div>
			<h2>News Search</h2>
			{searchForm()}
			{searchQuery !== '' && results.length > 0 ? (
				<div>
					<h3>Results</h3>
					{displayResults()}
				</div>
			) : (
				<p>
					Welcome. Stay hydrated!
					<span role="img" aria-label="Sunshine">
						☀️
					</span>
				</p>
			)}
		</div>
	);
};

export default Search;
