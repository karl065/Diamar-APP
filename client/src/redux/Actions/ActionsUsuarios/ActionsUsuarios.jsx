import axios from 'axios';
import server from '../../../connections/connections';
import {
	alertInfo,
	alertSuccess,
	alertWarning,
} from '../../../helpers/helperAlertas/Alertas';
import {
	setCaducidadToken,
	setLoading,
	setLogin,
	setRoles,
	setUsuarios,
} from '../../Slices/SlicesUsuarios/SlicesUsuarios';
import { isTokenExpired } from '../../../helpers/ValidacionUsuario/ValidacionUsuario';
import { socket } from '../../../helpers/Socket/socket';

export const login = async (userLogin, dispatch, navigate) => {
	try {
		const { data } = await axios.post(`${server.api.baseURL}auth`, userLogin);
		if (data) {
			localStorage.setItem('token', data.token);
			if (data.rol === 'Cliente') {
				navigate('/Cliente');
			} else if (data.rol === 'Administrador') {
				getUsuarios(dispatch);
				navigate('/Admin/Usuarios');
			}
		}
		const response = await axios.get(
			`${server.api.baseURL}usuarios?obtenerRoles=true`
		);

		dispatch(setRoles(response.data));
		alertSuccess('Inicio de sesión Correcto');
		dispatch(setLoading(false));
		dispatch(setLogin(data));

		const expirado = isTokenExpired(data.token);
		dispatch(setCaducidadToken(expirado.expiresIn));
	} catch (error) {
		alertWarning(error.response.data);
	}
};

export const getUsuarios = async (dispatch) => {
	try {
		const { data } = await axios.get(`${server.api.baseURL}usuarios`);
		dispatch(setUsuarios(data));
	} catch (error) {
		console.log(error);
	}
};

export const reLogin = async (token, dispatch, navigate) => {
	try {
		const expirado = isTokenExpired(token);

		if (expirado.expired || expirado === true) {
			alertInfo('Sesion expirada');
			logout(dispatch, navigate, expirado.user.id);
		} else {
			const { data } = await axios.get(`${server.api.baseURL}auth`, {
				headers: {
					'x-auth-token': token,
				},
			});

			if (data.rol === 'Cliente') {
				navigate('/Cliente');
			} else if (data.rol === 'Administrador') {
				await getUsuarios(dispatch);
				navigate('/Admin/Usuarios');
			}
			const response = await axios.get(
				`${server.api.baseURL}usuarios?obtenerRoles=true`
			);

			dispatch(setRoles(response.data));

			dispatch(setLogin(data));

			dispatch(setCaducidadToken(expirado.expiresIn));
		}
	} catch (error) {
		console.log(error.message);
	}
};

export const logout = async (dispatch, navigate, id) => {
	try {
		dispatch(setLogin(null));
		dispatch(setUsuarios([]));
		dispatch(setCaducidadToken(0));

		navigate('/');
		localStorage.removeItem('token');
		socket.emit('logoutUsuario', id);
	} catch (error) {
		console.log(error.message);
	}
};
