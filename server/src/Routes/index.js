import { Router } from "express";
import usuarios from "./RoutesUsuarios/RoutesUsuarios.js";
import reservas from "./RoutesReservas/RoutesReservas.js";
import tratamientos from "./RoutesTratamientos/RoutesTratamientos.js";
import fichaMasajes from "./RoutesFichasMasajes/RoutesFichasMasajes.js";
import fichaGeneral from "./RoutesFichasGenerales/RoutesFichasGenerales.js";

const router = Router();

router.use("/usuarios", usuarios);
router.use("/reservas", reservas);
router.use("/tratamientos", tratamientos);
router.use("/fichasMasajes", fichaMasajes);
router.use("/fichasGenerales", fichaGeneral);

export default router;
