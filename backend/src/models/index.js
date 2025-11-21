import  sequelize  from "../config/db.js";
import Organisation from "./organisation.js";
import User from "./user.js";
import Employee from "./employee.js";
import Team from "./team.js";
import EmployeeTeam from "./employeeTeam.js";
import Log from "./log.js";

// Relations
Organisation.hasMany(User);
User.belongsTo(Organisation);

Organisation.hasMany(Employee);
Employee.belongsTo(Organisation);

Organisation.hasMany(Team);
Team.belongsTo(Organisation);

Employee.belongsToMany(Team, { through: EmployeeTeam });
Team.belongsToMany(Employee, { through: EmployeeTeam });

export {
  sequelize,
  Organisation,
  User,
  Employee,
  Team,
  EmployeeTeam,
  Log
};
