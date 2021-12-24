import { Router } from "express";
import IndexCtrl from '../controllers/indexController'

const router = Router();

// method post
router.get("/:id", IndexCtrl.users.findOne)
router.post("/login",IndexCtrl.users.signin)

export default router;