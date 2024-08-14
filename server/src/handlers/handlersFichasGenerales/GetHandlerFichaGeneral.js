import GetControllerFichaGeneral from "./../../controllers/controllerFichaGeneral/GetControllerFichaGeneral";

const GetHandlerFichaGeneral = async (req, res) => {
  try {
    const fichasGenerales = await GetControllerFichaGeneral();

    return res.status(200).json(fichasGenerales);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default GetHandlerFichaGeneral;
