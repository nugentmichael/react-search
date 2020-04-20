import React, { useState, useEffect } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';

const Search = () => {
	const [results, setResults] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [url, setUrl] = useState();

	const searchForm = () => (
		<form className="search-form" onSubmit={handleSubmit}>
			<TextField
				outlined="true"
				label="Enter search query..."
				trailingIcon={<MaterialIcon role="button" icon="search" />}
			>
				<Input
					id="search-field"
					type="text"
					value={searchQuery}
					onChange={handleChange}
				/>
			</TextField>
			<Button raised>Search</Button>
		</form>
	);

	const handleChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
	};

	const fetchSearch = () => {
		fetch(url)
			.then((results) => results.json())
			.then((data) => setResults(data.hits))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		if (url) {
			fetchSearch();
		}
	}, [url]);

	const displayResults = () =>
		results.map((result, index) => (
			<li key={index}>
				<a href={result.url}>
					<h3>{result.title}</h3>
				</a>
				<p>{result.story_text}</p>
			</li>
		));

	return (
		<div>
			<h2>News Search</h2>
			{searchForm()}
			{results && results.length > 0 ? (
				<div className="search-results">
					<h3>Results</h3>
					<ul>{displayResults()}</ul>
				</div>
			) : (
				<p>Let's see what's in the news today...</p>
			)}
		</div>
	);
};

export default Search;
