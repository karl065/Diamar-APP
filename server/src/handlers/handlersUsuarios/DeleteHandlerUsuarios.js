import deleteControllerUsuarios from "./../../controllers/controllersUsuarios/DeleteControllerUsuarios";
const DeleteHandleUsuarios = async (req, res) => {
  try {
    const { id } = req.params;

    const usuarioEliminado = await deleteControllerUsuarios(id);

    return res.status(200).json(usuarioEliminado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default DeleteHandleUsuarios;
