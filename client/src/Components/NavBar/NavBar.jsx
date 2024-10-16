import { Link, useLocation } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { useSelector } from 'react-redux';

const NavBar = () => {
	const location = useLocation().pathname;
	const darkMode = useSelector((state) => state.componentes.darkMode);

	return (
		<div
			className={`flex items-center justify-between p-2 ${
				darkMode
					? 'bg-gradient-to-r from-blue-500 via-cyan-900 to-emerald-400 shadow-xl shadow-black'
					: 'bg-gradient-to-r from-green-400 via-cyan-900 to-blue-500 shadow-xl shadow-slate-600'
			}`}>
			<div className="p-2">
				<Link to={'/'}>DiAmar Artemisa SPA</Link>
			</div>
			<nav className="flex items-center gap-x-2">
				<div className="space-x-2 flex">
					<Link
						className={`${
							location === '/Login' ? 'hidden' : null
						} font-bold border-2 uppercase p-1  rounded-xl ${
							darkMode
								? 'border-white shadow-inner shadow-black'
								: 'border-black shadow-inner shadow-white'
						}
						
						 `}
						to={'/Login'}>
						Ingresar
					</Link>

					<Link
						className={` font-bold border-2 uppercase p-1  rounded-xl ${
							darkMode
								? 'border-white shadow-inner shadow-black'
								: 'border-black shadow-inner shadow-white'
						}
						
						 `}
						to={'/Registro'}>
						Registrarse
					</Link>
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
