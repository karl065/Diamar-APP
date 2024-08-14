import FichaMasaje from "./../../models/FichaMasajes";

const GetControllerFichaMasajes = async (estado, estadoPiel, fuerza) => {
  try {
    const whereConditions = {
      ...(estado && {
        estado: new RegExp(`^${estado}`, "i"),
      }),
      ...(estadoPiel > 0 && { estadoPiel }),
      ...(fuerza > 0 && { fuerza }),
    };

    const fichasMasajes = await FichaMasaje.find(
      Object.keys(whereConditions).length > 0 ? whereConditions : {}
    ).populate("usuario");

    return fichasMasajes;
  } catch (error) {
    return error;
  }
};

export default GetControllerFichaMasajes;
