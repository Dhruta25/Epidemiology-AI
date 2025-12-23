import { Router } from "express";
import {upload} from "../middlewares/multer.middlewares.js"
import { changeCurrentPassword, getProfile, loginUser, logoutUser, registerUser, updateProfile } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";


const userRouter = Router();


userRouter.route("/register").post(upload.single("profile"),registerUser)
userRouter.route("/login").post(upload.none(),loginUser)
userRouter.route("/logout").post(verifyJWT,logoutUser)
userRouter.route("/update-password").post(verifyJWT,upload.none(),changeCurrentPassword)
userRouter.route("/profile").get(verifyJWT,getProfile)
userRouter.route("/update-profile").patch(verifyJWT,upload.single("profile"),updateProfile)
export {userRouter};