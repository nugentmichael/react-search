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
			.then((result) => result.json())
			// .then(data => console.log(data))
			// .then(data => setLatLng(data))
			// .then(data => fetchWeather(data))
			.then((data) => {
				setLatLng(data);
				fetchWeather(data);
			})
			.catch((error) => console.log(error));
	};

	const fetchWeather = (coords) => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${keys.weather}`
		)
			.then((result) => result.json())
			// .then((data) => console.log(data))
			.then((data) => (setWeather(data), console.log(data)))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchLatLng();
	}, []);

	return (
		<div>
			<h2>Weather</h2>
			<div>
				<h3>{weather.name}</h3>
				{/* {Object.entries(weather).map((val, key) => (
					<p key={key}>{key}</p>
				))} */}
				{/* <p>{weather.main.temp}</p> */}
				{/* <p>{weather.main.feels_like}</p> */}
				{/* <p>{weather.main.humidity}</p>
				<p>{weather.main.pressure}</p>
				<p>{weather.main.temp}</p>
				<p>{weather.main.temp_max}</p>
				<p>{weather.main.temp_min}</p>
				<p>{weather.weather[0].description}</p>
				<p>{weather.weather[0].icon}</p>
				<p>{weather.weather[0].main}</p>
				<p>{weather.wind.deg}</p>
				<p>{weather.wind.speed}</p> */}
			</div>
		</div>
	);
};

export default Weather;
