import { Router } from "express";
import {upload} from "../middlewares/multer.middlewares.js"
import { registerUser } from "../controllers/user.controllers.js";



const userRouter = Router();


userRouter.route("/register").post(upload.single("profile"),registerUser)



export {userRouter};