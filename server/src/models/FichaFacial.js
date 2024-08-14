import mongoose from "mongoose";
import connection from "../config/DB";

const fichaFacialSchema = new mongoose.Schema(
  {
    tipoPiel: {
      type: String,
      required: true,
      enum: ["Seca", "Grasa", "Mixta", "Sensible"],
    },
    problemasPiel: {
      type: String,
      enum: ["Acne", "Rosácea", "Manchas"],
    },
    cosmetologia: {
      type: String,
      enum: ["Rutina Diaria", "Tratamientos"],
    },
    alergias: String,
    tratamientosPrevios: String,
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

const FichaFacialModel = connection.model("FichaFacial", fichaFacialSchema);

export default FichaFacialModel;
