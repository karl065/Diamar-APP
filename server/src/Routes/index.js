import { Router } from "express";
import usuarios from "./RoutesUsuarios/RoutesUsuarios.js";
import reservas from "./RoutesReservas/RoutesReservas.js";

const router = Router();

router.use("/usuarios", usuarios);
router.use("/reservas", reservas);

export default router;
