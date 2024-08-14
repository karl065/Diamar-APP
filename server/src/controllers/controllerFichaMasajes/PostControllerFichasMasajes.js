import FichaMasaje from "./../../models/FichaMasajes";
import Usuarios from "../../models/Usuarios";

const PostControllerFichaMasajes = async (nuevaFicha) => {
  try {
    const fichaNueva = await FichaMasaje.create(nuevaFicha);

    if (nuevaFicha.idUsuario) {
      await Usuarios.findByIdAndUpdate(
        nuevaFicha.idUsuario,
        { $push: { fichasMasajes: fichaNueva._id } },
        { new: true }
      );
    }

    return fichaNueva;
  } catch (error) {
    return error;
  }
};

export default PostControllerFichaMasajes;
