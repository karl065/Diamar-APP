import PutControllerFichaMasajes from "./../../controllers/controllerFichaMasajes/PutControllerFichaMasajes";

const PutHandlerFichaMasajes = async (req, res) => {
  try {
    const { id } = req.params;

    const dataUpdate = req.body;

    const fichaActualizada = await PutControllerFichaMasajes(dataUpdate, id);

    return res.status(200).json(fichaActualizada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PutHandlerFichaMasajes;
