import Usuarios from "./../../models/Usuarios";
import bcryptjs from "bcryptjs";

const postControllerUsuario = async (usuario) => {
  try {
    const verificarEmail = await Usuarios.findOne({ email: usuario.email });
    if (verificarEmail) {
      throw new Error("El correo electrónico ya está registrado");
    }

    const { password } = usuario;

    const passCrypt = await bcryptjs.hash(password, 10);

    usuario.password = passCrypt;

    const nuevoUsuario = await Usuarios.create(usuario);

    return nuevoUsuario;
  } catch (error) {
    return error;
  }
};

export default postControllerUsuario;
