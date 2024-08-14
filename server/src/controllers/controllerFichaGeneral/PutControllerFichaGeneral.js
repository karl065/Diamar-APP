import FichaGeneral from "../../models/FichaGeneral";

const PutControllerFichaGeneral = async (dataUpdate, id) => {
  try {
    await FichaGeneral.findByIdAndUpdate(id, dataUpdate);
    const fichaActualizada = await FichaGeneral.findById(id);
    return fichaActualizada;
  } catch (error) {
    return error;
  }
};

export default PutControllerFichaGeneral;
