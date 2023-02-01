import express from "express";
import { contact, courseRequest, getDashboardStats } from "../controllers/otherControllers.js";
import {isAuthenticated,authorizeAdmin} from "../middlewares/auth.js"
const router = express.Router();

// contact form
router.route("/contact").post(contact)

// contact form
router.route("/courserequest").post(courseRequest)

// get Admin
router.route("/admin/stats").get(isAuthenticated, authorizeAdmin,getDashboardStats)


export default router;