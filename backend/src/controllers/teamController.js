import { Team } from "../models/index.js";

export const createTeam = async (req, res) => {
  const team = await Team.create({
    ...req.body,
    organisationId: req.user.orgId
  });

  res.json(team);
};

export const getTeams = async (req, res) => {
  const teams = await Team.findAll({
    where: { organisationId: req.user.orgId }
  });

  res.json(teams);
};
