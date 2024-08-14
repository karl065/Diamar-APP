import express from "express";
import PostHandlerTratamientos from "./../../handlers/handlerTratamientos/PostHandlerTratamientos";
import DeleteHandlerTratamientos from "./../../handlers/handlerTratamientos/DeleteHandlerTratamientos";
import PutHandlerTratamientos from "./../../handlers/handlerTratamientos/PutHandlerTratamientos";
import GetHandlerTratamientos from "./../../handlers/handlerTratamientos/GetHandlerTratamientos";
const router = express.Router();

router.post("/", PostHandlerTratamientos);
router.delete("/:id", DeleteHandlerTratamientos);
router.put("/:id", PutHandlerTratamientos);
router.get("/", GetHandlerTratamientos);

export default router;
