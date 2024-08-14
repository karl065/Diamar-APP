import Usuarios from "./../../models/Usuarios";

const putControllerUsuarios = async (dataUpdate, id) => {
  try {
    await Usuarios.findByIdAndUpdate(id, dataUpdate);
    const usuarioActualizado = await Usuarios.findById(id);
    return usuarioActualizado;
  } catch (error) {
    return error;
  }
};

export default putControllerUsuarios;
