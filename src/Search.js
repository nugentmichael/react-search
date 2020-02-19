import React, { useState, useEffect } from 'react';

const Search = () => {
	// API Key: AIzaSyCMSAQDPcK9X64QQnA767szm0JZ1AypDPA
	// https://www.googleapis.com/customsearch/v1?key=AIzaSyCMSAQDPcK9X64QQnA767szm0JZ1AypDPA&cx=017576662512468239146:omuauf_lfve&q=lectures

	const [results, setResults] = useState([]);
	const [searchQuery, setSearchQuery] = useState('lectures');
	const [url, setUrl] = useState(
		`https://www.googleapis.com/customsearch/v1?key=AIzaSyCMSAQDPcK9X64QQnA767szm0JZ1AypDPA&cx=017576662512468239146:omuauf_lfve&q=${searchQuery}`
	);
	const [loading, setLoading] = useState(false);

	const fetchSearch = () => {
		// Set loading state to true
		setLoading(true);

		fetch(url)
			.then(results => results.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
	};

	useEffect(() => {
		fetchSearch();
	});

	return <p>Test</p>;
};

export default Search;
