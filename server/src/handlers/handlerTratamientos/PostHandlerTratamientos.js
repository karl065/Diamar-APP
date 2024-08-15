import { subirArchivo } from "../../helpers/Cloudinary/Cloudinary";
import PostControllerTratamientos from "./../../controllers/controllersTratamientos/PostControllerTratamientos";
import fs from "fs";

const PostHandlerTratamientos = async (req, res) => {
  try {
    const tratamiento = req.body;

    const { tipo } = req.query;

    if (tipo === "IMG") {
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

      tratamiento.imagen = url;
    }

    if (tipo === "VIDEO") {
      let nombreArchivo = req.files.video.name.split(`.`)[0];
      if (nombreArchivo.includes("(")) {
        nombreArchivo = nombreArchivo.split("(")[0].trim();
      }

      const url = await subirArchivo({
        tipo,
        nombre: nombreArchivo,
        archivo: req.files.video.tempFilePath,
      });

      fs.unlink(req.files.video.tempFilePath, (err) => {
        if (err) {
          console.error("Error al eliminar el archivo temporal:", err);
        } else {
          console.log("Archivo temporal eliminado correctamente.");
        }
      });

      tratamiento.video = url;
    }

    const nuevoTratamiento = await PostControllerTratamientos(tratamiento);

    return res.status(200).json(nuevoTratamiento);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PostHandlerTratamientos;
