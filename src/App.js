import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Navigation';
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
