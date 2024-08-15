import PutControllerFichasFaciales from "./../../controllers/controllersFichasFaciales/PutControllerFichasFaciales";

const PutHandlerFichaFaciales = async (req, res) => {
  try {
    const { id } = req.params;

    const dataUpdate = req.body;

    const fichaActualizada = await PutControllerFichasFaciales(dataUpdate, id);

    return res.status(200).json(fichaActualizada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PutHandlerFichaFaciales;
