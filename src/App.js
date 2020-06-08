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
import Footer from './Footer';

function App() {
	return (
		<div>
			<div className="App">
				<Router>
					<Nav />
					<Header />
					<Switch>
						<Redirect
							exact
							from="/roogle"
							to={`${process.env.PUBLIC_URL}/search`}
						/>
						<Route path={`${process.env.PUBLIC_URL}/search`}>
							<Search />
						</Route>
						<Route path={`${process.env.PUBLIC_URL}/news`}>
							<News />
						</Route>
						<Route path={`${process.env.PUBLIC_URL}/weather`}>
							<Weather />
						</Route>
					</Switch>
				</Router>
			</div>
			<Footer />
		</div>
	);
}

export default App;
