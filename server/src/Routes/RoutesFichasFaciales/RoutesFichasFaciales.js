import express from "express";
import PostHandlerFichaFaciales from "../../handlers/handlersFichasFaciales/PostHandlerFichaFaciales";
import DeleteHandlerFichaFaciales from "../../handlers/handlersFichasFaciales/DeleteHandlerFichaFaciales";
import PutHandlerFichaFaciales from "../../handlers/handlersFichasFaciales/PutHandlerFichaFaciales";
import GetHandlerFichaFaciales from "../../handlers/handlersFichasFaciales/GetHandlerFichaFaciales";
const router = express.Router();

router.post("/", PostHandlerFichaFaciales);
router.delete("/:id", DeleteHandlerFichaFaciales);
router.put("/:id", PutHandlerFichaFaciales);
router.get("/", GetHandlerFichaFaciales);

export default router;
