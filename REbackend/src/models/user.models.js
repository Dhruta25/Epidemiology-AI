import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String
    },
    refreshToken: {
        type: String
    },
    chatHistory: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Chat"
        }
    ]

    
},{timestamps:true})


UserSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next;
    this.password = await bcrypt.hash(this.password,10)
     next;
})


UserSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(this.password,password)
}


userSchema.methods.generateAccessToken =  function () {
   return  jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


userSchema.methods.generateRefreshToken = async function () {
    return  jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
           expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}





export const User = mongoose.model("User",UserSchema)