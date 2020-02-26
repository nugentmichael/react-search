import React, { useState, useEffect } from 'react';

const Search = () => {
	const [results, setResults] = useState([]);
	const [searchQuery, setSearchQuery] = useState('news');
	const [url, setUrl] = useState(
		// `https://www.googleapis.com/customsearch/v1?key=AIzaSyCMSAQDPcK9X64QQnA767szm0JZ1AypDPA&cx=017576662512468239146:omuauf_lfve&q=${searchQuery}`
		`http://hn.algolia.com/api/v1/search?query=${searchQuery}`
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

	const handleSubmit = e => {
		e.preventDefault();
		setUrl(
			// `https://www.googleapis.com/customsearch/v1?key=AIzaSyCMSAQDPcK9X64QQnA767szm0JZ1AypDPA&cx=017576662512468239146:omuauf_lfve&q=${searchQuery}`
			`http://hn.algolia.com/api/v1/search?query=${searchQuery}`
		);
	};

	const fetchSearch = () => {
		// Set loading state to true
		setLoading(true);

		fetch(url)
			.then(results => results.json())
			// .then(data => console.log(data.items))
			// .then(data => setResults(data.items))
			// .then(data => console.log(data.hits))
			.then(data => (setResults(data.hits), console.log(data.hits)))
			.catch(error => console.log(error));
	};

	const displayLoading = () => <p>Loading&ellip;</p>;

	useEffect(() => {
		fetchSearch();
	}, [url]);

	const displayResults = () =>
		results.map((result, index) => (
			<div key={index}>
				<h3>{result.title}</h3>
				<p>{result.story_text}</p>
			</div>
		));

	return (
		<div>
			{searchForm()}
			{searchQuery ? (
				((<p>Results</p>), displayResults())
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
