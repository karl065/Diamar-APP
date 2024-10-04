// import { useEffect, useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div className="h-screen w-screen grid grid-cols-[auto,1fr] m-0 overflow-hidden">
			<SideBar />
			<div className="flex flex-col h-screen overflow-hidden">
				<NavBar />
				<div className="flex items-center justify-center w-full h-full">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Layout;
