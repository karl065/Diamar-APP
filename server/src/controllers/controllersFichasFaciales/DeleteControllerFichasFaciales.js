import FichaFacial from "./../../models/FichaFacial";

const DeleteControllerFichaFacial = async (id) => {
  try {
    const fichaEliminada = await FichaFacial.findById(id);

    await FichaFacial.findByIdAndDelete(id);

    return fichaEliminada;
  } catch (error) {
    return error;
  }
};

export default DeleteControllerFichaFacial;
