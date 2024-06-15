import { ApiError } from '../utilities/apiError.js'
import { asyncHandler } from '../utilities/asyncHandler.js'
import { User } from '../models/user.model.js'

export const adminMiddleware = asyncHandler(async (req,_,next) => {
    try {
        const user = await User.findById(req.user._id)

        if(user.isAdmin !== true){
            throw new ApiError(400,"Invalid credentials")
        }

        next()

    } catch (error) {
        throw new ApiError(400,"Invalid credentials")
    }

})
