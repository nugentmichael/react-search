import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import './App.scss';
import Nav from './Navigation';
import Header from './Header';
import Search from './Search';
import News from './News';
import Weather from './Weather';

function App() {
	return (
		<div>
			<div className="App">
				<Router>
					<Nav />
					<Header />
					<Switch>
						<Redirect exact from="/" to="/search" />
						<Route path="/search">
							<Search />
						</Route>
						<Route path="/news">
							<News />
						</Route>
						<Route path="/weather">
							<Weather />
						</Route>
					</Switch>
				</Router>
			</div>
			<div className="footer">&copy; 2020</div>
		</div>
	);
}

export default App;
