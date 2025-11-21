import { Employee } from "../models/index.js";

export const createEmployee = async (req, res) => {
  const employee = await Employee.create({
    ...req.body,
    organisationId: req.user.orgId
  });

  res.json(employee);
};

export const getEmployees = async (req, res) => {
  const employees = await Employee.findAll({
    where: { organisationId: req.user.orgId }
  });
  res.json(employees);
};
