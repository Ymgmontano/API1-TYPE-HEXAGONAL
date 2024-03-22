import express from "express";

import { musicController } from "./dependencies";
import { PostContactController } from "./dependencies";

const ContactRouter = express.Router();
ContactRouter.get("/", musicController.getAllUsers.bind(musicController));
ContactRouter.post("/", PostContactController.createMusic.bind(PostContactController));

export { ContactRouter };
