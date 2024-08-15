import handlerAutenticado from "../../handlers/handlersAuth/handlerAutenticado";
import handlerAutenticar from "../../handlers/handlersAuth/handlerAutenticar";
import authMiddle from "../../middlewares/auth/authMiddle";

const router = require("express").Router();

router.post("/", handlerAutenticar);
router.get("/", authMiddle, handlerAutenticado);

export default router;
