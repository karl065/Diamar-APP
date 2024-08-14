require("dotenv").config();
import mongoose from "mongoose";
const { DB } = process.env;

const mongoOptions = {
  maxPoolSize: 200,
  maxConnecting: 200,
};

const connection = mongoose.createConnection(DB, mongoOptions);

connection.on("connected", () => {
  console.log("DB conectada");
});

connection.on("error", (error) => {
  console.error("Error de conexión a DB", error);
});

export default connection;
