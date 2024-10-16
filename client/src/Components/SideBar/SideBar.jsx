import { useSelector } from 'react-redux';

const SideBar = () => {
	const darkMode = useSelector((state) => state.componentes.darkMode);
	return (
		<div
			className={`h-[100vh] ${
				darkMode
					? 'bg-gradient-to-t from-green-400 via-cyan-900 to-blue-500'
					: 'bg-gradient-to-t from-blue-500 via-cyan-900 to-green-400'
			} p-2 flex flex-col justify-between`}>
			<h1>SideBar</h1>
		</div>
	);
};

export default SideBar;
