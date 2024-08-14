import FichaGeneral from "./../../models/FichaGeneral";

const DeleteControllerFichaGeneral = async (id) => {
  try {
    const fichaEliminada = await FichaGeneral.findById(id);

    await FichaGeneral.findByIdAndDelete(id);

    return fichaEliminada;
  } catch (error) {
    return error;
  }
};

export default DeleteControllerFichaGeneral;
