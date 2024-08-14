import mongoose from "mongoose";
import connection from "../config/DB";

const tratamientosSchema = new mongoose.Schema({
  item: String,
  precio: Number,
});

const TratamientosModel = connection.model("Tratamientos", tratamientosSchema);

export default TratamientosModel;
