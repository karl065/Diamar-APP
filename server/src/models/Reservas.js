import mongoose from "mongoose";
import connection from "../config/DB";

const reservasSchema = new mongoose.Schema(
  {
    tratamiento: {
      type: [String],
      required: true,
    },
    estado: {
      type: String,
      required: true,
      enum: ["Pendiente", "Realizado", "Cancelado", "Aplazado"],
    },
    comentario: String,
    precioTerapia: Number,
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuarios",
    },
  },
  {
    timestamps: true,
  }
);

const ReservasModel = connection.model("Reservas", reservasSchema);

export default ReservasModel;
