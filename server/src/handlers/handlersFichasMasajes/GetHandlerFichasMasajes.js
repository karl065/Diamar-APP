import FichaMasaje from "./../../models/FichaMasajes";

const GetHandlerFichaMasajes = async (req, res) => {
  try {
    const { estado, estadoPiel, fuerza } = req.query;

    const fichasMasajes = await FichaMasaje(estado, estadoPiel, fuerza);

    return res.status(200).json(fichasMasajes);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default GetHandlerFichaMasajes;
