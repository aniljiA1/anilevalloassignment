import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Organisation = sequelize.define("Organisation", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

export default Organisation;


