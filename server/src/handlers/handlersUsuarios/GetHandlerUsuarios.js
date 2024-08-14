import getControllerUsuarios from "../../controllers/controllersUsuarios/GetControllerUsuarios";

const GetHandlerUsuarios = async (req, res) => {
  try {
    const {
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      documento,
      edad,
      sexo,
      celular,
      obtenerSexo,
      obtenerRoles,
      estado,
      habilitado,
      email,
    } = req.query;

    const usuarios = await getControllerUsuarios(
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      documento,
      edad,
      sexo,
      celular,
      obtenerSexo,
      obtenerRoles,
      estado,
      habilitado,
      email
    );

    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default GetHandlerUsuarios;
