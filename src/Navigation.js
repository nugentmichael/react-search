import React, { useState, useEffect } from 'react';

const Nav = () => {
	const [hamburger, setHamburger] = useState('');
	const [menu, setMenu] = useState('');

	const toggleMenu = () => {
		menu === '' ? setHamburger('is-active') : setHamburger('');
		hamburger === '' ? setMenu('open') : setMenu('');
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

			<ul className="list-unstyled components">
				<li className="active">
					<a
						href="#homeSubmenu"
						data-toggle="collapse"
						aria-expanded="false"
						className="dropdown-toggle"
					>
						Home
					</a>
					<ul className="collapse list-unstyled" id="homeSubmenu">
						<li>
							<a href="#">Home 1</a>
						</li>
						<li>
							<a href="#">Home 2</a>
						</li>
						<li>
							<a href="#">Home 3</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a
						href="#pageSubmenu"
						data-toggle="collapse"
						aria-expanded="false"
						className="dropdown-toggle"
					>
						Pages
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu">
						<li>
							<a href="#">Page 1</a>
						</li>
						<li>
							<a href="#">Page 2</a>
						</li>
						<li>
							<a href="#">Page 3</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">Portfolio</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
