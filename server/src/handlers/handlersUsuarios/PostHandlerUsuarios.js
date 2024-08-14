import postControllerUsuario from "./../../controllers/controllersUsuarios/PostControllerUsuarios";
const PostHandlerUsuarios = async (req, res) => {
  try {
    const usuario = req.body;

    const usuarioNuevo = await postControllerUsuario(usuario);

    return res.status(200).json(usuarioNuevo);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PostHandlerUsuarios;
