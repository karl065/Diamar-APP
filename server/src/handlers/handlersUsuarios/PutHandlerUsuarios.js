import putControllerUsuarios from "../../controllers/controllersUsuarios/PutControllerUsuarios";
import {
  eliminarArchivo,
  subirArchivo,
} from "../../helpers/Cloudinary/Cloudinary";
import fs from "fs";

const PutHandlerUsuarios = async (req, res) => {
  try {
    const { id } = req.params;

    const dataUpdate = req.body;

    const { tipo, public_id } = req.query;

    if (public_id) {
      await eliminarArchivo(public_id);

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

      dataUpdate.foto = url;
    }

    if (tipo === "PDF") {
      let nombreArchivo = req.files.archivo.name.split(`.`)[0];
      if (nombreArchivo.includes("(")) {
        nombreArchivo = nombreArchivo.split("(")[0].trim();
      }

      const url = await subirArchivo({
        tipo,
        nombre: nombreArchivo,
        archivo: req.files.archivo.tempFilePath,
      });

      fs.unlink(req.files.archivo.tempFilePath, (err) => {
        if (err) {
          console.error("Error al eliminar el archivo temporal:", err);
        } else {
          console.log("Archivo temporal eliminado correctamente:");
        }
      });

      dataUpdate.consentimiento = url;
    }

    const usuarioActualizado = await putControllerUsuarios(dataUpdate, id);

    return res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

export default PutHandlerUsuarios;
