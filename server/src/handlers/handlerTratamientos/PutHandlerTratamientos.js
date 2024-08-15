import PutControllerTratamiento from "./../../controllers/controllersTratamientos/PutControllerTratamientos";

const PutHandlerTratamientos = async (req, res) => {
  try {
    const { id } = req.params;

    const dataUpdate = req.body;

    const { tipo, public_id } = req.query;

    if (public_id) {
      await eliminarArchivo(public_id);

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

        dataUpdate.imagen = url;
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

        dataUpdate.video = url;
      }
    }

    const tratamientoActualizado = await PutControllerTratamiento(
      dataUpdate,
      id
    );

    return res.status(200).json(tratamientoActualizado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PutHandlerTratamientos;
