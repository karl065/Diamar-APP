import putControllerUsuarios from "../../controllers/controllersUsuarios/PutControllerUsuarios";

const PutHandlerUsuarios = async (req, res) => {
  try {
    const { id } = req.params;

    const dataUpdate = req.body;

    const usuarioActualizado = await putControllerUsuarios(dataUpdate, id);

    return res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

export default PutHandlerUsuarios;
