import { User } from "../models/userModel.js";
import { HttpError } from "../models/errorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ================= REGISTER A NEW USER
// POST : api/users/register
// UNPROTECTED
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, password2 } = req.body;
    if (!name || !email || !password) {
      return next(new HttpError("Alle Felder müssen ausgefüllt sein.", 422));
    }

    const newEmail = email.toLowerCase();

    const emailExists = await User.findOne({ email: newEmail });
    if (emailExists) {
      return next(new HttpError("Email already exists.", 422));
    }

    if (password.trim().length < 6) {
      return next(
        new HttpError("Password should be at least 6 characters.", 422)
      );
    }

    if (password != password2) {
      return next(new HttpError("Passwords do not match.", 422));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email: newEmail,
      password: hashedPass,
    });

    res.status(201).json(`New user ${newUser.email} registered.`);
  } catch (error) {
    console.log(error);
    return next(new HttpError("User registration failed.", 422));
  }
};

// ================= LOGIN A REGISTERED USER
// POST : api/users/login
// UNPROTECTED
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new HttpError("Alle Felder müssen ausgefüllt sein.", 422));
    }
    const newEmail = email.toLowerCase();

    const user = await User.findOne({ email: newEmail });
    if (!user) {
      return next(
        new HttpError(
          "E-Mail oder Passwort stimmen nicht überein. Bitte versuche es noch einmal.",
          422
        )
      );
    }

    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      return next(
        new HttpError(
          "E-Mail oder Passwort stimmen nicht überein. Bitte versuche es noch einmal.",
          422
        )
      );
    }

    const { _id: id, name } = user;
    const token = jwt.sign({ id, name }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ token, id, name });
  } catch (error) {
    return next(
      new HttpError("login failed. Please check your credentials.", 422)
    );
  }
};

// ================= USER PROFILE
// POST : api/users/:id
// PROTECTED
// 3:53:30
export const getUser = async (req, res, next) => {
  res.json("User Profile");
};

// ================= CHANGE USER AVATAR
// 3:57:17
// POST : api/users/change-avatar
// PROTECTED
export const changeAvatar = async (req, res, next) => {
  res.json("Change User avatar");
};

// ================= EDIT USER DETAILS
// POST : api/users/edit-user
// PROTECTED
export const editUser = async (req, res, next) => {
  res.json("Edit user profile");
};
