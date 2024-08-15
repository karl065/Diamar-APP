import GetControllerFichaCorporal from "../../controllers/controllerFichasCorporales/GetControllerFichaCorporal";

const GetHandlerFichaCorporal = async (req, res) => {
  try {
    const { problemas, condiciones, obtenerProblemas, obtenerCondiciones } =
      req.query;

    const fichasCorporales = await GetControllerFichaCorporal(
      problemas,
      condiciones,
      obtenerProblemas,
      obtenerCondiciones
    );

    return res.status(200).json(fichasCorporales);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default GetHandlerFichaCorporal;
