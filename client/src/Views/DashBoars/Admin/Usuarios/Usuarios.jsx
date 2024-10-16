import { useSelector } from 'react-redux';
import Tabla from '../../../../Components/Tabla/Tabla';

const Usuarios = () => {
	const usuarios = useSelector((state) => state.usuarios.usuarios);

	const columnasUsuarios = [
		{ Header: 'Nombre', accessor: 'primerNombre' },
		{ Header: 'Apellido', accessor: 'primerApellido' },
		{ Header: 'Documento', accessor: 'documento' },
		{ Header: 'Edad', accessor: 'edad' },
		{ Header: 'Email', accessor: 'email' },
		{ Header: 'Celular', accessor: 'celular' },
		{ Header: 'rol', accessor: 'rol' },
	];

	return (
		<div className="border rounded-lg bg-gradient-to-r from-emerald-200 from-15% via-fuchsia-700 to-purple-700">
			{usuarios.length > 0 ? (
				<Tabla columns={columnasUsuarios} data={usuarios}></Tabla>
			) : null}
		</div>
	);
};

export default Usuarios;
