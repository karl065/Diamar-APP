import FichaCorporal from "./../../models/FichaCorporal";

const GetControllerFichaCorporal = async (
  problemas,
  condiciones,
  obtenerProblemas,
  obtenerCondiciones
) => {
  try {
    if (obtenerProblemas) {
      const problemasEnum = await FichaCorporal.schema.path("problemas")
        .enumValues;
      return problemasEnum;
    }
    if (obtenerCondiciones) {
      const condicionesEnum = await FichaCorporal.schema.path("sexo")
        .enumValues;
      return condicionesEnum;
    }

    const whereConditions = {
      ...(problemas && {
        problemas: new RegExp(`^${problemas}`, "i"),
      }),
      ...(condiciones > 0 && { condiciones }),
    };

    const fichasCorporales = await FichaCorporal.find(
      Object.keys(whereConditions).length > 0 ? whereConditions : {}
    ).populate("usuario");

    return fichasCorporales;
  } catch (error) {
    return error;
  }
};

export default GetControllerFichaCorporal;
