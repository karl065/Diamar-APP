import { setDarkMode } from '../../Slices/SlicesComponentes/SlicesComponentes';

export const darkMode = async (mode, dispatch) => {
	try {
		dispatch(setDarkMode(mode));
	} catch (error) {
		console.log(error);
	}
};
