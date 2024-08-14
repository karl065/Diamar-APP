import FichaFacial from "./../../models/FichaFacial";

const GetControllerFichaFacial = async (
  tipoPiel,
  problemasPiel,
  cosmetologia
) => {
  try {
    const whereConditions = {
      ...(tipoPiel && {
        tipoPiel: new RegExp(`^${tipoPiel}`, "i"),
      }),
      ...(problemasPiel > 0 && { problemasPiel }),
      ...(cosmetologia > 0 && { cosmetologia }),
    };

    const fichasFaciales = await FichaFacial.find(
      Object.keys(whereConditions).length > 0 ? whereConditions : {}
    ).populate("usuario");

    return fichasFaciales;
  } catch (error) {
    return error;
  }
};

export default GetControllerFichaFacial;
