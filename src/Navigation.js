import React, { useState, useEffect, useRef } from 'react';
import TopAppBar, {
	TopAppBarIcon,
	TopAppBarRow,
	TopAppBarSection,
	TopAppBarTitle,
} from '@material/react-top-app-bar';
import Drawer, {
	DrawerAppContent,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
} from '@material/react-drawer';
import List, {
	ListItem,
	ListItemGraphic,
	ListItemText,
} from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';
import { Link } from 'react-router-dom';

const Nav = () => {
	const [open, setOpen] = useState(false);
	const initialLoad = useRef(true);
	const state = { selectedIndex: 0 };

	const toggleMenu = () => {
		open === false ? setOpen(true) : setOpen(false);
	};

	useEffect(() => {
		if (initialLoad.current) {
			initialLoad.current = false;
			return;
		}
	}, []);

	const MenuHeader = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	};

	return (
		<div className="drawer-container">
			<Drawer modal open={open} onClose={() => setOpen(false)}>
				<DrawerHeader style={MenuHeader}>
					<DrawerTitle tag="h2">Menu</DrawerTitle>
					<button>
						<MaterialIcon
							hasRipple
							icon="close"
							aria-label="Close Menu"
							onClick={() => toggleMenu()}
						/>
					</button>
				</DrawerHeader>

				<DrawerContent>
					<List singleSelection selectedIndex={state.selectedIndex}>
						<ListItem onClick={() => toggleMenu()}>
							<Link to={`${process.env.PUBLIC_URL}/search`}>
								<ListItemGraphic
									graphic={<MaterialIcon icon="search" />}
								/>
								<ListItemText primaryText="Search" />
							</Link>
						</ListItem>
						<ListItem onClick={() => toggleMenu()}>
							<Link to={`${process.env.PUBLIC_URL}/news`}>
								<ListItemGraphic
									graphic={<MaterialIcon icon="language" />}
								/>
								<ListItemText primaryText="News" />
							</Link>
						</ListItem>
						<ListItem onClick={() => toggleMenu()}>
							<Link to={`${process.env.PUBLIC_URL}/weather`}>
								<ListItemGraphic
									graphic={<MaterialIcon icon="wb_sunny" />}
								/>
								<ListItemText primaryText="Weather" />
							</Link>
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
									onClick={() => toggleMenu()}
								/>
							</TopAppBarIcon>
							<Link to={`${process.env.PUBLIC_URL}/search`}>
								<TopAppBarTitle>Roogle</TopAppBarTitle>
							</Link>
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
