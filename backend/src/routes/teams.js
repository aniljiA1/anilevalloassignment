import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createTeam, getTeams } from "../controllers/teamController.js";

const router = express.Router();

router.post("/", authMiddleware, createTeam);
router.get("/", authMiddleware, getTeams);

export default router;
