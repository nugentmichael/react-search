import React, { useState, useEffect, useRef } from 'react';
import Card, {
	CardPrimaryContent,
	CardMedia,
	CardActions,
	CardActionButtons,
	CardActionIcons,
} from '@material/react-card';
import keys from './keys';

const Weather = () => {
	const [ip, setIP] = useState('https://www.cloudflare.com/cdn-cgi/trace');
	const [latLng, setLatLng] = useState([]);
	const [weather, setWeather] = useState({
		name: '',
		main: '',
		icon: '',
		temp: '',
		temp_min: '',
		temp_max: '',
		feels_like: '',
		humidity: '',
		pressure: '',
		wind_deg: '',
		wind_speed: '',
	});

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
			`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${keys.weather}`
		)
			.then((result) => result.json())
			// .then((data) => console.log(data))
			.then((data) =>
				setWeather({
					name: data.name,
					main: data.weather[0].main,
					icon: data.weather[0].icon,
					temp: data.main.temp,
					temp_min: data.main.temp_min,
					temp_max: data.main.temp_max,
					feels_like: data.main.feels_like,
					humidity: data.main.humidity,
					pressure: data.main.pressure,
					wind_deg: data.wind.deg,
					wind_speed: data.wind.speed,
				})
			)
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchLatLng();
	}, []);

	return (
		<div>
			<h2>Weather</h2>

			<Card>
				<CardPrimaryContent>
					{
						// Icon
						weather.icon ? (
							<CardMedia
								square
								wide
								imageUrl={`//openweathermap.org/img/w/${weather.icon}.png`}
								alt={
									weather.main ? weather.main : 'Weather Icon'
								}
							></CardMedia>
						) : null
					}
				</CardPrimaryContent>

				<div>
					{
						// City Name
						weather.name ? (
							<h3>
								<strong>{weather.name}</strong>
							</h3>
						) : null
					}

					{
						// Main Conditions
						weather.main ? <p>{weather.main}</p> : null
					}

					{
						// Temperature
						weather.temp ? (
							<p>
								<strong>Tempearture:</strong> {weather.temp}
								&deg;C
							</p>
						) : null
					}

					{
						// Minimum Temperature
						weather.temp_min ? (
							<p>
								<strong>Tempearture (Min):</strong>{' '}
								{weather.temp_min}&deg;C
							</p>
						) : null
					}

					{
						// Maximum Temperature
						weather.temp_max ? (
							<p>
								<strong>Tempearture (Max):</strong>{' '}
								{weather.temp_max}&deg;C
							</p>
						) : null
					}

					{
						// Feels Like
						weather.feels_like ? (
							<p>
								<strong>Tempearture (Feels Like):</strong>{' '}
								{weather.feels_like}&deg;C
							</p>
						) : null
					}

					{
						// Humidity
						weather.humidity ? (
							<p>
								<strong>Humidity:</strong> {weather.humidity}
								&#37;
							</p>
						) : null
					}

					{
						// Atmospheric Pressure
						weather.pressure ? (
							<p>
								<strong>Atmospheric Pressure:</strong>{' '}
								{weather.pressure} hPa
							</p>
						) : null
					}

					{
						// Wind Direction
						weather.wind_deg ? (
							<p>
								<strong>Wind Direction:</strong>{' '}
								{weather.wind_deg}
								&deg;
							</p>
						) : null
					}

					{
						// Wind Speed
						weather.wind_speed ? (
							<p>
								<strong>Wind Speed:</strong>{' '}
								{weather.wind_speed}
								km/h
							</p>
						) : null
					}
				</div>
			</Card>
		</div>
	);
};

export default Weather;
