import { Router } from "express";
import HelloController from "../controllers/HelloController";

const router = Router();

router.get('/', HelloController.helloWorld);

export default router;