import React, { useState } from 'react';
import TopAppBar, {
	TopAppBarIcon,
	TopAppBarRow,
	TopAppBarSection,
	TopAppBarTitle
} from '@material/react-top-app-bar';
import Drawer, {
	DrawerAppContent,
	DrawerContent,
	DrawerHeader,
	DrawerTitle
} from '@material/react-drawer';
import List, {
	ListItem,
	ListItemGraphic,
	ListItemText
} from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';
import { Link } from 'react-router-dom';

const Nav = () => {
	// const [hamburger, setHamburger] = useState('');
	// const [menu, setMenu] = useState('');

	// const toggleMenu = () => {
	// 	hamburger === '' ? setHamburger('is-active') : setHamburger('');
	// 	menu === '' ? setMenu('open') : setMenu('');
	// };

	// this.state = { selectedIndex: 0 };

	return (
		// <div>
		// 	<div
		// 		className={`hamburger hamburger--arrow js-hamburger ${hamburger}`}
		// 		onClick={toggleMenu}
		// 	>
		// 		<div className="hamburger-box">
		// 			<div className="hamburger-inner"></div>
		// 		</div>
		// 	</div>

		// 	<nav id="sidebar" className={menu}>
		// 		<h3>Menu</h3>

		// 		<ul className="menu-components">
		// 			<li>
		// 				<Link to="/search">🔍 Search</Link>
		// 			</li>
		// 			<li>
		// 				<Link to="/news">📰 News</Link>
		// 			</li>
		// 			<li>
		// 				<Link to="/weather">☀️ Weather</Link>
		// 			</li>
		// 		</ul>
		// 	</nav>
		// </div>
		<div className="drawer-container">
			<Drawer>
				<DrawerHeader>
					<DrawerTitle tag="h2">jane.smith@gmail.com</DrawerTitle>
				</DrawerHeader>

				<DrawerContent>
					<List
						singleSelection
						// selectedIndex={this.state.selectedIndex}
					>
						<ListItem>
							<ListItemGraphic
								graphic={<MaterialIcon icon="folder" />}
							/>
							<ListItemText primaryText="Mail" />
						</ListItem>
					</List>
				</DrawerContent>
			</Drawer>

			<DrawerAppContent className="drawer-app-content">
				<TopAppBar>
					<TopAppBarRow>
						<TopAppBarSection align="start">
							<TopAppBarIcon navIcon tabIndex={0}>
								<MaterialIcon
									hasRipple
									icon="menu"
									onClick={() => console.log('click')}
								/>
							</TopAppBarIcon>
							<TopAppBarTitle>Roogle</TopAppBarTitle>
						</TopAppBarSection>
						<TopAppBarSection align="end" role="toolbar">
							<TopAppBarIcon actionItem tabIndex={0}>
								<MaterialIcon
									aria-label="Fork Repo"
									hasRipple
									icon="edit"
									onClick={() =>
										window.open(
											'https://github.com/nugentmichael/react-search'
										)
									}
								/>
							</TopAppBarIcon>
						</TopAppBarSection>
					</TopAppBarRow>
				</TopAppBar>
			</DrawerAppContent>
		</div>
	);
};

export default Nav;
