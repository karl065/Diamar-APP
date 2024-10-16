import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
	const location = useLocation().pathname;
	return (
		<div className="flex item flex-col h-screen overflow-hidden">
			<NavBar />
			<div className="h-screen w-screen grid grid-cols-[auto,1fr] m-0 overflow-hidden">
				{location === '/Login' ? null : location === '/' ? null : location ===
				  '/Registro' ? null : (
					<SideBar />
				)}
				<div className="flex items-center justify-center w-screen h-full">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Layout;
