import express from "express";
import PostHandlerNotificaciones from "../../handlers/handlersNotificaciones/PostHandlerNotificaciones";
import DeleteHandlerNotificaciones from "../../handlers/handlersNotificaciones/DeleteHandlerNotificaciones";
import PutHandlerNotificaciones from "../../handlers/handlersNotificaciones/PutHandlerNotificaciones";
import GetHandlerNotificaciones from "../../handlers/handlersNotificaciones/GetHandlerNotificaciones";
const router = express.Router();

router.post("/", PostHandlerNotificaciones);
router.delete("/:id", DeleteHandlerNotificaciones);
router.put("/:id", PutHandlerNotificaciones);
router.get("/", GetHandlerNotificaciones);

export default router;
