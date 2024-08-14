import FichaGeneral from "./../../models/FichaGeneral";

const GetControllerFichaGeneral = async () => {
  try {
    const fichasGenerales = await FichaGeneral.find();
    return fichasGenerales;
  } catch (error) {
    return error;
  }
};

export default GetControllerFichaGeneral;
