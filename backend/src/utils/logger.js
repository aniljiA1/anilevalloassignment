import Log from "../models/log.js";

export async function logAction(action, userId) {
  await Log.create({ action, userId });
}
