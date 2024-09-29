import { eliminarArchivo } from '../../helpers/Cloudinary/Cloudinary';
import { publicId } from '../../helpers/Cloudinary/functions';
import Tratamientos from './../../models/Tratamientos';

const DeleteControllerTratamiento = async (id) => {
	try {
		const tratamientoEliminado = await Tratamientos.findById(id);

		tratamientoEliminado.imagen.map((imagen) => {
			const public_Id = publicId(imagen);
			eliminarArchivo(public_Id);
		});
		tratamientoEliminado.video.map((video) => {
			const public_Id = publicId(video);
			eliminarArchivo(public_Id);
		});

		await Tratamientos.findByIdAndDelete(id);

		return tratamientoEliminado;
	} catch (error) {
		return error;
	}
};

export default DeleteControllerTratamiento;
