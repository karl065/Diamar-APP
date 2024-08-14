import FichaFacial from "./../../models/FichaFacial";

const PutControllerFichasFaciales = async (dataUpdate, id) => {
  try {
    await FichaFacial.findByIdAndUpdate(id, dataUpdate);
    const fichaActualizada = await FichaFacial.findById(id);
    return fichaActualizada;
  } catch (error) {
    return error;
  }
};

export default PutControllerFichasFaciales;
