import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Team = sequelize.define("Team", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Team;


