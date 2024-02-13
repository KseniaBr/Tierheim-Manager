import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./utils/mongodb.js";
import cors from "cors";

import userRoutes from "./routers/userRoutes.js";
import postRoutes from "./routers/postRoutes.js";

import * as middleware from "./middleware/errorMiddleware.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT;

app.use(express.json({ extended: true }));
//urlencoded => in postman je nach dem welches Format geschickt wird, api kann damit umgehen
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:5174" }));

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/", express.static(path.join(__dirname, "/dist")));
app.get("/*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});

// console.log(await bcrypt.hash("Test1234?", 12));
