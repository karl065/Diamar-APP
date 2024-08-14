import express from "express";
import PostHandlerFichaGeneral from "./../../handlers/handlersFichasGenerales/PostHandlerFichaGeneral";
import DeleteHandlerFichaGeneral from "./../../handlers/handlersFichasGenerales/DeleteHandlerFichaGeneral";
import PutHandlerFichaGeneral from "./../../handlers/handlersFichasGenerales/PutHandlerFichaGeneral";
import GetHandlerFichaGeneral from "./../../handlers/handlersFichasGenerales/GetHandlerFichaGeneral";
const router = express.Router();

router.post("/", PostHandlerFichaGeneral);
router.delete("/:id", DeleteHandlerFichaGeneral);
router.put("/:id", PutHandlerFichaGeneral);
router.get("/", GetHandlerFichaGeneral);

export default router;
