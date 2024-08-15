import FichaCorporal from "./../../models/FichaCorporal";
import Usuarios from "../../models/Usuarios";

const PostControllerFichaCorporal = async (nuevaFicha) => {
  try {
    const fichaNueva = await FichaCorporal.create(nuevaFicha);

    if (nuevaFicha.idUsuario) {
      await Usuarios.findByIdAndUpdate(
        nuevaFicha.idUsuario,
        { $push: { fichasCorporales: fichaNueva._id } },
        { new: true }
      );
    }

    return fichaNueva;
  } catch (error) {
    return error;
  }
};

export default PostControllerFichaCorporal;
