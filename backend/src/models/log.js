import { DataTypes } from "sequelize";
import sequelize  from "../config/db.js";

const Log = sequelize.define("log", {
  action: DataTypes.STRING,
  userId: DataTypes.INTEGER
});

export default Log;
