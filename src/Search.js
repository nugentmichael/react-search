import React, { useState, useEffect } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';
import keys from './keys';

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
		setUrl(
			`https://www.googleapis.com/customsearch/v1?key=${keys.google}&cx=partner-pub-7786488079830346:vnol26-ct61&q=${searchQuery}`
		);
	};

	const fetchSearch = () => {
		fetch(url)
			.then((results) => results.json())
			.then((data) => setResults(data.items))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		if (url) {
			fetchSearch();
		}
	}, [url]);

	const displayResults = () =>
		results.map((result, index) => (
			<div key={index}>
				<a href={result.formattedUrl}>
					<h3>{result.title}</h3>
				</a>
				<p>{result.snippet}</p>
			</div>
		));

	return (
		<div>
			<h2>Search</h2>
			{searchForm()}
			{results && results.length > 0 ? (
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
