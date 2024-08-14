import FichaMasaje from "./../../models/FichaMasajes";

const PutControllerFichaMasajes = async (dataUpdate, id) => {
  try {
    await FichaMasaje.findByIdAndUpdate(id, dataUpdate);
    const fichaActualizada = await FichaMasaje.findById(id);
    return fichaActualizada;
  } catch (error) {
    return error;
  }
};

export default PutControllerFichaMasajes;
