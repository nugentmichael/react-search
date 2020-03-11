import React, { useState, useEffect } from 'react';
import keys from './keys';

const Weather = () => {
	const [ip, setIP] = useState('https://www.cloudflare.com/cdn-cgi/trace');
	const [latLng, setLatLng] = useState([]);
	const [weather, setWeather] = useState([]);

	const fetchLatLng = () => {
		fetch(
			`http://api.ipstack.com/108.162.130.190?access_key=${keys.ipstack}&format=1`
		)
			.then(result => result.json())
			// .then(data => console.log(data))
			.then(data => setLatLng(data))
			.catch(error => console.log(error));
	};

	useEffect(() => {
		if (latLng) {
			fetchLatLng();
		}

		if (weather) {
			// fetchWeather();
		}
	}, [latLng, weather]);

	const fetchWeather = () => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latLng.latitude}&lon=${latLng.longitude}&appid=${keys.weather}`
		)
			.then(result => result.json())
			.then(data => console.log(data));
		// .then(data => setWeather(data));
	};

	return (
		<div>
			<h2>Weather</h2>
			<div>
				<h3>{latLng.latitude}</h3>
				<p>{latLng.longitude}</p>
			</div>
		</div>
	);
};

export default Weather;
