import mongoose from "mongoose";
import connection from "../config/DB";

const fichaMasajeSchema = new mongoose.Schema(
  {
    estado: {
      type: [String],
      required: true,
      enum: [
        "Dolor Muscular",
        "Tension en Area Especifica",
        "Restricción de Movimiento",
      ],
    },
    areaEspecifica: String,
    lesiones: Boolean,
    tipoLesion: String,
    estadoPiel: {
      type: String,
      enum: ["Irritada", "Sensible"],
    },
    fuerza: {
      type: String,
      enum: ["Baja", "Media", "Alta"],
    },
    diagnostico: String,
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuarios",
    },
  },
  {
    timestamps: true,
  }
);

const FichaMasajeModel = connection.model("FichaMasaje", fichaMasajeSchema);

export default FichaMasajeModel;
