import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Employee = sequelize.define("Employee", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

export default Employee;

