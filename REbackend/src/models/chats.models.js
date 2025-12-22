import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const chatSchema = new Schema({
    Heading:{
        type: String,
        required: true
    },
    Describtion: {
        type: String,
        required: true,
    }
},{timestamps:true})

chatSchema.plugin(mongooseAggregatePaginate)

export const Chat = mongoose.model("Chat",chatSchema)