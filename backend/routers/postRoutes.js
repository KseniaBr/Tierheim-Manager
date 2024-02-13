import { Router } from "express";

const postRouter = Router();

postRouter.get("/", (req, res, next) => {
  res.json("This is the posts route");
});

export default postRouter;
