import express from "express";
import PostHandlerFichaCorporal from "../../handlers/handlersFichasCorporales/PostHandlerFichaCorporal";
import DeleteHandlerFichaCorporal from "../../handlers/handlersFichasCorporales/DeleteHandlerFichaCorporal";
import PutHandlerFichaCorporal from "../../handlers/handlersFichasCorporales/PutHandlerFichaCorporal";
import GetHandlerFichaCorporal from "../../handlers/handlersFichasCorporales/GetHandlerFichaCorporal";
const router = express.Router();

router.post("/", PostHandlerFichaCorporal);
router.delete("/:id", DeleteHandlerFichaCorporal);
router.put("/:id", PutHandlerFichaCorporal);
router.get("/", GetHandlerFichaCorporal);

export default router;
