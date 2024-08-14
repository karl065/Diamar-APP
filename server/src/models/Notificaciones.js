import mongoose from "mongoose";
import connection from "../config/DB";

const notificacionesSchema = new mongoose.Schema(
  {
    notificacion: String,
    visto: {
      type: Boolean,
      default: false,
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuarios",
    },
  },
  {
    timestamps: true,
  }
);

const NotificacionesModel = connection.model(
  "Notificaciones",
  notificacionesSchema
);

export default NotificacionesModel;
