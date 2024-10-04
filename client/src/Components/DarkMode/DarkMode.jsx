import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoSunny } from 'react-icons/io5';
import '../../App.css';

const DarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		// Cargar la preferencia del usuario desde localStorage
		const storedPreference = localStorage.getItem('dark-mode');
		return storedPreference ? JSON.parse(storedPreference) : null; // null indica que se usará la preferencia del sistema
	});

	// Detectar la preferencia del sistema si no hay preferencia manual
	useEffect(() => {
		if (isDarkMode === null) {
			// Comprobar la preferencia del sistema
			const prefersDarkScheme = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			setIsDarkMode(prefersDarkScheme);
		}
	}, [isDarkMode]);

	// Aplicar colores en el root según el modo
	useEffect(() => {
		const root = document.documentElement; // Obtener el elemento root
		if (isDarkMode) {
			root.style.setProperty('--bg-color', '#1a202c'); // Color de fondo oscuro
			root.style.setProperty('--text-color', '#e2e8f0'); // Color de texto en modo oscuro
		} else {
			root.style.setProperty('--bg-color', '#f0f0f0'); // Color de fondo claro
			root.style.setProperty('--text-color', '#000'); // Color de texto en modo claro
		}

		// Guardar la preferencia en localStorage
		localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
	}, [isDarkMode]);

	// Manejar el clic en el botón para alternar entre modos
	const handleToggleDarkMode = () => {
		setIsDarkMode((prev) => !prev); // Cambia el estado
	};

	return (
		<button
			onClick={handleToggleDarkMode}
			title={isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
			className={`px-2 py-2 ${
				isDarkMode ? 'text-gray-200' : 'text-gray-800 '
			} rounded-full`}>
			{isDarkMode ? <IoSunny /> : <BsFillMoonStarsFill />}
		</button>
	);
};

export default DarkMode;
