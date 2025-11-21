import express from "express";
import { login, registerOrg } from "../controllers/authController.js";
const router = express.Router();

router.post("/register", registerOrg);
router.post("/login", login);

export default router;
