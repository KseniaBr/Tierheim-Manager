import { Router } from "express";

import * as userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/:id", userController.getUser);
userRouter.post("/change-avatar", userController.changeAvatar);
userRouter.patch("/edit-user", userController.editUser);

export default userRouter;
