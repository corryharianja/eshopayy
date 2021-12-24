import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router();


router.get("/",indexController.category.findAll)
router.post("/",indexController.category.create)

export default router;