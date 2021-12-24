import { Router } from "express";
import authJWT from "../middleware/authJWT";
import indexController from "../controllers/indexController";

const router = Router();

//router.post("/signin",authJWT.authenticate,authJWT.signin);

router.post("/signup",indexController.users.signup);

export default router;