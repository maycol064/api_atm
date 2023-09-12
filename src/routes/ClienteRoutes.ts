import { Router } from "express";
import ClienteController from "../controllers/ClienteController";

const router = Router();

router.get('/', ClienteController.getAll);

export default router;