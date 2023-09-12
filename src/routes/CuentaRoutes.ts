import { Router } from "express";
import CuentaController from "../controllers/CuentaController";

const router = Router();

router.get('/', CuentaController.validar_cuenta);

export default router;