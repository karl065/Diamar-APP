import Usuarios from "./../../models/Usuarios";

const putControllerUsuarios = async (dataUpdate, id) => {
  try {
    if (dataUpdate.consentimiento) {
      await Usuarios.findByIdAndUpdate(id, {
        $push: { consentimiento: dataUpdate.consentimiento },
      });
    } else {
      await Usuarios.findByIdAndUpdate(id, dataUpdate);
    }

    const usuarioActualizado = await Usuarios.findById(id);

    return usuarioActualizado;
  } catch (error) {
    return error;
  }
};

export default putControllerUsuarios;
