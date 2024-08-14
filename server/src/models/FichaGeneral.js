import mongoose from "mongoose";
import connection from "../config/DB";

const fichaGeneralSchema = new mongoose.Schema({
  alergias: Boolean,
  cualesAlergias: String,
  enfermedades: Boolean,
  cualesEnfermedades: String,
  medicamentos: Boolean,
  cualesMedicamentos: String,
  cirugiasRecientes: String,
  embarazo: Boolean,
  tiempoEmbarazo: String,
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
  },
});

const FichaGeneralModel = connection.model("FichaGeneral", fichaGeneralSchema);

export default FichaGeneralModel;
