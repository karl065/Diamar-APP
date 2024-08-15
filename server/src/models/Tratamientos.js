import mongoose from "mongoose";
import connection from "../config/DB";

const tratamientosSchema = new mongoose.Schema({
  tratamiento: String,
  descripcion: String,
  imagen: String,
  tiempoEstimado: String,
  precio: Number,
});

const TratamientosModel = connection.model("Tratamientos", tratamientosSchema);

export default TratamientosModel;
