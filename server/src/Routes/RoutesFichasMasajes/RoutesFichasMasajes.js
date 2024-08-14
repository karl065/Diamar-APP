import express from "express";
import PostHandlerFichaMasajes from "./../../handlers/handlersFichasMasajes/PostHandlerFichasMasajes";
import DeleteHandlerFichaMasajes from "./../../handlers/handlersFichasMasajes/DeleteHandlerFichasMasajes";
import PutHandlerFichaMasajes from "./../../handlers/handlersFichasMasajes/PutHandlerFichasMasajes";
import GetHandlerFichaMasajes from "./../../handlers/handlersFichasMasajes/GetHandlerFichasMasajes";
const router = express.Router();

router.post("/", PostHandlerFichaMasajes);
router.delete("/:id", DeleteHandlerFichaMasajes);
router.put("/:id", PutHandlerFichaMasajes);
router.get("/", GetHandlerFichaMasajes);

export default router;
