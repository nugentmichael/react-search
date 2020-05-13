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

		if (searchQuery !== '') {
			setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
		}
	};

	useEffect(() => {
		if (url) {
			const fetchSearch = () => {
				fetch(url)
					.then((results) => results.json())
					.then((data) => setResults(data.hits))
					.catch((error) => console.log(error));
			};

			fetchSearch();
		}
	}, [url]);

	const displayResults = () =>
		results.map((result, index) => (
			<li key={index}>
				<a href={result.url}>
					<h5>{result.title}</h5>
				</a>
				<p>{result.story_text}</p>
			</li>
		));

	return (
		<div
			className={
				'search-container ' +
				(results && results.length > 0 ? 'span-width' : '')
			}
		>
			<h2 className="heading">News Search</h2>
			{searchForm()}
			{results && results.length > 0 ? (
				<div className="search-results">
					<h3>Results</h3>
					<ul>{displayResults()}</ul>
				</div>
			) : (
				<div className="search-footer">
					<p>
						Let's see what's in the news today...&nbsp;
						<span role="img" aria-label="Thinking">
							🤔
						</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default Search;
