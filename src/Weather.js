import React, { useState, useEffect } from 'react';
import LinearProgress from '@material/react-linear-progress';
import Card, { CardPrimaryContent, CardMedia } from '@material/react-card';
import keys from './keys';

const Weather = () => {
	// eslint-disable-next-line no-unused-vars
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

	const fetchWeather = (coords) => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${keys.weather}`
		)
			.then((result) => result.json())
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
		fetch('https://ipapi.co/json/')
			.then((response) => response.json())
			.then((data) => {
				fetchLatLng(data.ip);
			});

		const fetchLatLng = (ip) => {
			fetch(`//api.ipstack.com/${ip}?access_key=${keys.ipstack}&format=1`)
				.then((result) => result.json())
				.then((data) => {
					setLatLng(data);
					fetchWeather(data);
				})
				.catch((error) => console.log(error));
		};
	}, []);

	return (
		<div className="weather">
			<h2 className="heading">Weather</h2>

			{weather.name ? (
				<Card className="weather-card">
					<CardPrimaryContent className="weather-card-primary-content">
						{
							// City Name
							weather.name ? (
								<h3>
									<strong>{weather.name}</strong>
								</h3>
							) : null
						}

						{
							// Icon
							weather.icon ? (
								<CardMedia
									className="weather-icon"
									imageUrl={`//openweathermap.org/img/w/${weather.icon}.png`}
									alt={
										weather.main
											? weather.main
											: 'Weather Icon'
									}
								></CardMedia>
							) : null
						}

						{
							// Main Conditions
							weather.main ? <p>{weather.main}</p> : null
						}
					</CardPrimaryContent>

					<div className="weather-card-content">
						<table>
							<thead>
								<tr>
									<th>
										<strong>Current Conditions:</strong>
									</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{
									// Temperature
									weather.temp ? (
										<tr>
											<td>Tempearture:</td>
											<td>
												{weather.temp}
												&deg;C
											</td>
										</tr>
									) : null
								}

								{
									// Minimum Temperature
									weather.temp_min ? (
										<tr>
											<td>Tempearture (Min):</td>
											<td>{weather.temp_min}&deg;C</td>
										</tr>
									) : null
								}

								{
									// Maximum Temperature
									weather.temp_max ? (
										<tr>
											<td>Tempearture (Max):</td>
											<td>{weather.temp_max}&deg;C</td>
										</tr>
									) : null
								}

								{
									// Feels Like
									weather.feels_like ? (
										<tr>
											<td>Tempearture (Feels Like):</td>
											<td>{weather.feels_like}&deg;C</td>
										</tr>
									) : null
								}

								{
									// Humidity
									weather.humidity ? (
										<tr>
											<td>Humidity:</td>
											<td>{weather.humidity}</td>
										</tr>
									) : null
								}

								{
									// Atmospheric Pressure
									weather.pressure ? (
										<tr>
											<td>Atmospheric Pressure:</td>
											<td>{weather.pressure} hPa</td>
										</tr>
									) : null
								}

								{
									// Wind Direction
									weather.wind_deg ? (
										<tr>
											<td>Wind Direction:</td>
											<td>{weather.wind_deg}&deg;</td>
										</tr>
									) : null
								}

								{
									// Wind Speed
									weather.wind_speed ? (
										<tr>
											<td>Wind Speed:</td>
											<td>
												{weather.wind_speed}
												km/h
											</td>
										</tr>
									) : null
								}
							</tbody>
						</table>
					</div>
				</Card>
			) : (
				<LinearProgress
					indeterminate="true"
					closed={weather.name ? 'true' : 'false'}
				/>
			)}
		</div>
	);
};

export default Weather;
