import express from "express";

const router = express.Router();
import PostHandlerUsuarios from "./../../handlers/handlersUsuarios/PostHandlerUsuarios";
import DeleteHandleUsuarios from "./../../handlers/handlersUsuarios/DeleteHandlerUsuarios";
import PutHandlerUsuarios from "./../../handlers/handlersUsuarios/PutHandlerUsuarios";
import GetHandlerUsuarios from "./../../handlers/handlersUsuarios/GetHandlerUsuarios";

router.post("/", PostHandlerUsuarios);
router.delete("/:id", DeleteHandleUsuarios);
router.put("/:id", PutHandlerUsuarios);
router.get("/", GetHandlerUsuarios);

export default router;
