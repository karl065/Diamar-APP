import FichaCorporal from "./../../models/FichaCorporal";

const PutControllerFichaCorporal = async (dataUpdate, id) => {
  try {
    await FichaCorporal.findByIdAndUpdate(id, dataUpdate);
    const fichaActualizada = await FichaCorporal.findById(id);
    return fichaActualizada;
  } catch (error) {
    return error;
  }
};

export default PutControllerFichaCorporal;
