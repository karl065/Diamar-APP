import mongoose from "mongoose";
import connection from "../config/DB";

const fichaCorporalSchema = new mongoose.Schema(
  {
    problemas: {
      type: String,
      required: true,
      enum: ["Celulitis", "Retención Líquidos", "Estrías"],
    },
    condiciones: {
      type: String,
      enum: ["Problemas Circulatorios", "Varices"],
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

const FichaCorporalModel = connection.model(
  "FichaCorporal",
  fichaCorporalSchema
);

export default FichaCorporalModel;
