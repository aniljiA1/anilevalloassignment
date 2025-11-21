import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Organisation, User } from "../models/index.js";

export const registerOrg = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const org = await Organisation.create({ name });

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashed,
      organisationId: org.id
    });

    res.json({ message: "Organisation registered", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, orgId: user.organisationId },
    process.env.JWT_SECRET
  );

  res.json({ token });
};
