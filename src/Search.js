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
			`//www.googleapis.com/customsearch/v1?key=${keys.google}&cx=partner-pub-7786488079830346:vnol26-ct61&q=${searchQuery}`
		);
	};

	useEffect(() => {
		if (url) {
			const fetchSearch = () => {
				fetch(url)
					.then((results) => results.json())
					.then((data) => setResults(data.items))
					.catch((error) => console.log(error));
			};
			fetchSearch();
		}
	}, [url]);

	const displayResults = () =>
		results.map((result, index) => (
			<li key={index}>
				<p className="result-link">{result.displayLink}</p>
				<a
					href={result.formattedUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h5>{result.title}</h5>
				</a>
				<p className="result-snippet">{result.snippet}</p>
			</li>
		));

	return (
		<div
			className={
				'search-container ' +
				(results && results.length > 0 ? 'span-width' : '')
			}
		>
			<h2 className="heading">Search</h2>
			{searchForm()}
			{results && results.length > 0 ? (
				<div className="search-results">
					<h3>Results</h3>
					<ul>{displayResults()}</ul>
				</div>
			) : (
				<div className="search-footer">
					<p>
						Welcome. Stay hydrated!&nbsp;
						<span role="img" aria-label="Sunshine">
							☀️
						</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default Search;
