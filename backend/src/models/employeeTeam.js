import { DataTypes } from "sequelize";
import sequelize  from "../config/db.js";

const EmployeeTeam = sequelize.define("employee_team", {
  role: DataTypes.STRING
});

export default EmployeeTeam;
