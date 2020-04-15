import React from 'react';

const Footer = () => {
	return (
		<footer className="App-footer">
			<h6>
				<strong>Roogle:</strong> A React Search App &copy;{' '}
				{new Date().getFullYear()}
			</h6>
		</footer>
	);
};

export default Footer;
