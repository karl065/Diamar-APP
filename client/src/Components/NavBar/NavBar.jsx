import { Link, useLocation } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { useEffect, useState } from 'react';

const NavBar = () => {
	const location = useLocation().pathname;
	const [darkMode, setDarkMode] = useState('');

	useEffect(() => {
		setDarkMode(localStorage.getItem('dark-item'));
	}, []);

	return (
		<div className="flex items-center justify-end p-2 border-gray-400 bg-secondary-fondo">
			<nav className="flex items-center gap-x-2">
				<div className="space-x-2">
					<Link
						className={`${
							location === '/Login' ? 'hidden' : null
						} border p-1 uppercase font-bold border- rounded-xl ${
							darkMode ? 'bg-lime-600' : 'bg-fuchsia-700'
						} `}
						to={'/Login'}>
						Ingresar
					</Link>

					<Link to={'/Registro'}>Registrarse</Link>
				</div>
				<div className={location === '/' ? 'hidden' : null}>
					<Menu menuButton={<MenuButton>Menu</MenuButton>} transition>
						<MenuItem>Cut</MenuItem>
						<MenuItem>Copy</MenuItem>
						<MenuItem>Paste</MenuItem>
					</Menu>
				</div>
				<DarkMode />
			</nav>
		</div>
	);
};

export default NavBar;
