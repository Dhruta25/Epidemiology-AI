import {asyncHandler} from "../utils/asyncHandler.js"
import {apiError} from "../utils/apiError.js"
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { apiResponse } from "../utils/apiResponse.js";



const generateRefreshAccessToken = async(userId) => {
      try {
        const user = await User.findById(userId);
        if(!user){
            throw new apiError(500,"User not fount")
        }
       const accessToken = await user.generateAccessToken();
       const refreshToken = await user.generateRefreshToken();

       user.refreshToken = refreshToken
       await user.save({validateBeforeSave:false})
       return {refreshToken,accessToken}

      } catch (error) {
        throw new apiError(500,"Something went wrong")
      }
}



const registerUser = asyncHandler(async(req,res) => {
    //console.log(req.body)
    const {username,email,password} = req.body;

    if(!username){
        throw new apiError(400,"Username is required")
    }
    if(!email){
        throw new apiError(401,"Email is required");
    }
    if(!password){
        throw new apiError(402,"Password is required")
    }
    
    if(!(email === email.toLowerCase()) || !email.includes("@")){
        throw new apiError(403,"Invalid email..")
    }


    const sameemailexist = await User.findOne({email});

    if(sameemailexist){
        throw new apiError(403,"Email already registered");
    }


    const profilePath = req?.file?.path;
    const profile = uploadOnCloudinary(profilePath);

    const user = await User.create({
        username: username,
        email: email,
        password: password,
        profile: profile?.url || ""
    });

    
    const ispresent = await User.findById(user?._id).select("-password -refreshToken")

    if(!ispresent){
        throw new apiError(500,"Opps !!!! Registration failed....Try again")
    }
     
   // console.log(ispresent);
    
    res.status(200).json(
        new apiResponse(200,ispresent,"registration Successfully...")
    )

})


const loginUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body;
    
    if(!email){
       throw new apiError(400,"Email is required")
    }
    if(!password){
        throw new apiError(401,"Password is required")
    }
    if(!(email === email.toLowerCase()) || !email.includes("@")){
        throw new apiError(403,"Invalid email..")
    }
    const user = await User.findOne({email});
    if(!user){
        throw new apiError(404,"No account exist with this mail")
    }
    const validpassword = user.isPasswordCorrect(password);

    if(!validpassword){
        throw new apiError(405,"Password is not correct")
    }
    const {refreshToken , accessToken} = await generateRefreshAccessToken(user._id)


    const options = {
        httpOnly: true,
        secure: true
    }

    const newuser = await User.findById(user._id).select("-password -refreshToken")
    res.status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new apiResponse(200,{
            User : newuser,refreshToken,accessToken
        },"Login successfully....")
    )
})


export {registerUser,loginUser}