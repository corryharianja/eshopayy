import { Router } from "express";
import indexController from "../controllers/indexController";
import UploadDownloadHelper from "../middleware/UploadDownloadHelper";

const router = Router();

router.get("/", indexController.products.findAll);
router.get("/:id", indexController.products.findOne)
router.post("/",indexController.products.create)
router.post("/images",UploadDownloadHelper.uploadImages,indexController.products.create1)
router.put("/:id",indexController.products.update)
router.delete("/:id",indexController.products.deleteRow)

export default router;