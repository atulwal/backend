import mongoose, {Schema} from "moongoose"

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.TypesObjectId,
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // one to whom subscriber is subscribing 
        ref: "User"
    }
}, {timestamps: true})


export const Subscription = mongoose.model("Subscription", subscriptionSchema)