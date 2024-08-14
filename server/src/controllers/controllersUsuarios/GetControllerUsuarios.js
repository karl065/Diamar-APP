import Usuarios from "./../../models/Usuarios";

const getControllerUsuarios = async (
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
  rol
) => {
  try {
    if (obtenerRoles) {
      const rolesEnum = await Usuarios.schema.path("rol").enumValues;
      return rolesEnum;
    }
    if (obtenerSexo) {
      const sexoEnum = await Usuarios.schema.path("sexo").enumValues;
      return sexoEnum;
    }
    const whereConditions = {
      ...(primerNombre && {
        primerNombre: new RegExp(`^${primerNombre}`, "i"),
      }),
      ...(segundoNombre && {
        segundoNombre: new RegExp(`^${segundoNombre}`, "i"),
      }),
      ...(primerApellido && {
        primerApellido: new RegExp(`^${primerApellido}`, "i"),
      }),
      ...(segundoApellido && {
        segundoApellido: new RegExp(`^${segundoApellido}`, "i"),
      }),
      ...(email && { email: new RegExp(`^${email}`, "i") }),
      ...(celular && { celular }),
      ...(documento && { documento }),
      ...(sexo && { sexo }),
      ...(edad && { edad }),
      ...(estado && { estado }),
      ...(habilitado && { habilitado }),
      ...(rol && { rol }),
    };

    const usuarios = await Usuarios.find(
      Object.keys(whereConditions).length > 0 ? whereConditions : {},
      { password: 0 }
    )
      .populate("reservas")
      .populate("fichaGeneral");
    // .populate("fichasMasajes");

    //.populate("fichasFaciales")
    // .populate("fichasCorporales")
    // .populate("notificaciones");

    console.log(usuarios);
    return usuarios;
  } catch (error) {
    return error;
  }
};

export default getControllerUsuarios;
