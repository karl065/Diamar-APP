import GetControllerFichaFacial from "../../controllers/controllersFichasFaciales/GetControllerFichasFaciales";

const GetHandlerFichaFaciales = async (req, res) => {
  try {
    const { tipoPiel, problemasPiel, cosmetologia } = req.query;

    const fichasFaciales = await GetControllerFichaFacial(
      tipoPiel,
      problemasPiel,
      cosmetologia
    );

    return res.status(200).json(fichasFaciales);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default GetHandlerFichaFaciales;
