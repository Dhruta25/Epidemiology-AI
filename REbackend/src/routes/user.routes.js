import { Router } from "express";
import {upload} from "../middlewares/multer.middlewares.js"
import { loginUser, registerUser } from "../controllers/user.controllers.js";



const userRouter = Router();


userRouter.route("/register").post(upload.single("profile"),registerUser)
userRouter.route("/login").post(upload.none(),loginUser)


export {userRouter};