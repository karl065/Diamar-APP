import express from "express";
import PostHandlerReservas from "./../../handlers/handlersReservas/PostHandlerReservas";
import deleteControllerReservas from "./../../controllers/controllersReservas/DeleteControllerReservas";
import PutHandlerReservas from "./../../handlers/handlersReservas/PutHandlerReservas";
import GetHandlerReservas from "./../../handlers/handlersReservas/GetHandlerReservas";
const router = express.Router();

router.post("/", PostHandlerReservas);
router.delete("/:id", deleteControllerReservas);
router.put("/:id", PutHandlerReservas);
router.get("/", GetHandlerReservas);

export default router;
