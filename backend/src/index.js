import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sequelize } from "./models/index.js";
import authRoutes from "./routes/auth.js";
import employeeRoutes from "./routes/employees.js";
import teamRoutes from "./routes/teams.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/teams", teamRoutes);

app.get("/", (req, res) => {
  res.send("HRMS Backend Running...");
});


sequelize.sync({ alter: true }).then(() => console.log("DB synced"));

app.listen(5000, () => console.log("Server running on port 5000"));
