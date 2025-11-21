import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createEmployee, getEmployees } from "../controllers/employeeController.js";

const router = express.Router();

router.post("/", authMiddleware, createEmployee);
router.get("/", authMiddleware, getEmployees);

export default router;
