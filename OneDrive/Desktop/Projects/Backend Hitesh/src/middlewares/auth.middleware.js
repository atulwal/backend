import {ApiError} from "../utils/ApiError"
import {asyncHandler} from "../utils/asyncHandler"
import {User} from "../models/user.model"
import jwt from "jsonwebtoken"

export const verifyJtw = asyncHandler(async(req, res, next) => { //next means take it to next
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "")
    
        if(!token){
            throw new ApiError(401, "unauthorized request")
        }
        
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user) {
            // frontend discussion
            throw new ApiError(401, "InvalidAccess Token");
        }
    
        req_user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token");
        
    }

})