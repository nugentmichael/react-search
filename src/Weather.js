import React, { useState, useEffect } from 'react';
import keys from './keys';

const Weather = () => {
	const [ip, setIP] = useState('https://www.cloudflare.com/cdn-cgi/trace');
	const [latLng, setlatLng] = useState(
		`http://api.ipstack.com/108.162.130.190?access_key=${keys.ipstack}&format=1`
	);
	const [weather, setWeather] = useState();

	const fetchIP = () => {
		fetch(latLng)
			.then(result => result.json())
			// .then(data => console.log(data));
			.then(data => setIP(data.ip));
	};

	useEffect(() => {
		fetchIP();
	});

	return <h2>Weather</h2>;
};

export default Weather;
