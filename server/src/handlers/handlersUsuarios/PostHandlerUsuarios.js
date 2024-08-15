import { subirArchivo } from "../../helpers/Cloudinary/Cloudinary";
import postControllerUsuario from "./../../controllers/controllersUsuarios/PostControllerUsuarios";
import fs from "fs";

const PostHandlerUsuarios = async (req, res) => {
  try {
    const usuario = req.body;

    const { tipo } = req.query;

    let nombreArchivo = req.files.foto.name.split(`.`)[0];
    if (nombreArchivo.includes("(")) {
      nombreArchivo = nombreArchivo.split("(")[0].trim();
    }

    const url = await subirArchivo({
      tipo,
      nombre: nombreArchivo,
      archivo: req.files.foto.tempFilePath,
    });

    fs.unlink(req.files.foto.tempFilePath, (err) => {
      if (err) {
        console.error("Error al eliminar el archivo temporal:", err);
      } else {
        console.log("Archivo temporal eliminado correctamente:");
      }
    });

    usuario.foto = url;

    const usuarioNuevo = await postControllerUsuario(usuario);

    return res.status(200).json(usuarioNuevo);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PostHandlerUsuarios;
