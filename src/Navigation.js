import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	const [hamburger, setHamburger] = useState('');
	const [menu, setMenu] = useState('');

	const toggleMenu = () => {
		hamburger === '' ? setHamburger('is-active') : setHamburger('');
		menu === '' ? setMenu('open') : setMenu('');
	};

	return (
		<nav id="sidebar" className={menu}>
			<div className="sidebar-header">
				<h3>Menu</h3>

				<div
					className={`hamburger hamburger--arrow js-hamburger ${hamburger}`}
					onClick={toggleMenu}
				>
					<div className="hamburger-box">
						<div className="hamburger-inner"></div>
					</div>
				</div>
			</div>

			<ul className="menu-components">
				<li>
					<Link to="/Search">Search</Link>
				</li>
				<li>
					<Link to="/Weather">Weather</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
