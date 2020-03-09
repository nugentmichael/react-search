import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Navigation';
import Header from './Header';
import Search from './Search';
import Weather from './Weather';

function App() {
	return (
		<div>
			<Nav />
			<div className="App">
				<Header />

				<Router>
					<Switch>
						<Route path="/Search">
							<Search />
						</Route>
						<Route path="/Weather">
							<Weather />
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
