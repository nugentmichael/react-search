import React from 'react';
import './App.css';
import Nav from './Navigation';
import Header from './Header';
import Search from './Search';

function App() {
	return (
		<div>
			<Nav />
			<div className="App">
				<Header />
				<Search />
			</div>
		</div>
	);
}

export default App;
