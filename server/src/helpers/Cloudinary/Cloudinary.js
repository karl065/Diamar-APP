import { v2, uploader } from "cloudinary";
const { CLOUD_NAME, APIKEYCLOUD, APISECRETCLOUD, PRESET } = process.env;

v2.config({
  cloud_name: CLOUD_NAME,
  api_key: APIKEYCLOUD,
  api_secret: APISECRETCLOUD,
  secure: true,
});

export const subirArchivo = async (archivos) => {
  try {
    let options;
    const { tipo, archivo, nombre } = archivos;
    if (tipo === "PDF") {
      options = {
        folder: "DIAMARAPP/documentos",
        public_id: nombre,
        display_name: nombre,
        unique_filename: true,
      };
    } else if (tipo === "IMG") {
      options = {
        folder: "DIAMARAPP/imagenes",
        public_id: nombre,
        display_name: nombre,
        unique_filename: true,
      };
    } else if (tipo === "VIDEO") {
      options = {
        folder: "DIAMARAPP/videos",
        public_id: nombre,
        display_name: nombre,
        unique_filename: true,
      };
    }
    const url = await uploader.upload(archivo, PRESET, options);

    return url.secure_url;
  } catch (error) {
    return error;
  }
};

export const eliminarArchivo = async (public_id) => {
  try {
    const result = await uploader.destroy(public_id);
    return result;
  } catch (error) {
    return error;
  }
};
