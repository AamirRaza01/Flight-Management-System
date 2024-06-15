import { ApiError } from "../src/utilities/apiError.js";
import { ApiResponse } from "../src/utilities/apiResponse.js";
import { User } from "../src/models/user.model.js";
import { asyncHandler } from "../src/utilities/asyncHandler.js"; 

const getAllUsers = async () => {
    try {
        const users = await User.find()
    
        return users
    } catch (error) {
        throw new ApiError(500,'No user found')
    }
}

const getUserbyUsername = asyncHandler(async (req,res) => {
    try {
        const {username} = req.body
    
        const user = await User.findOne({username})
    
        if(!user){
            return res
            .status(400)
            .json(
                new ApiResponse(400,"No user found")
            )
        }
    
        return res
        .status(200)
        .json(
            new ApiResponse(200,user)
        )
    } catch (error) {
        throw new ApiError(500,'Something went wrong')
    }
})

const deleteAllUser = async () => {
    try {
        await User.deleteMany()
    } catch (error) {
        throw new ApiError(500,'Something went wrong')
    }
}

const deleteOneUser = asyncHandler(async (req,res) => {
    try {
        const {username} = req.body

        await User.findOneAndDelete({username})

        return res
        .status(200)
        .json(
            new ApiResponse(200,'User was deleted successfully')
        )
    } catch (error) {
        throw new ApiError(500,"No user found")
    }
})

const createUser = asyncHandler(async (req,res) => {
    const {username,fullname,email,password} = req.body

    const user = await User.create({
        fullname,
        email,
        password,
        username,
        profilePicture: profilePicture
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"//for security
    )

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user")
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201,createdUser,"User created successfully")
    )
})

const updateUser = asyncHandler(async (req,res) => {
    const userId = req.params._id //how does the userid sent ???

    const {username,fullname,email} = req.body

    const user = await User.findByIdAndUpdate(
        userId,
        {
            username: username,
            fullname: fullname,
            email: email
        },
        {
            new: true
        }
    )

    if(!user){
        throw new ApiError(400,'User not found')
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,user,'User was updated')
    )
})

export {
    getAllUsers,
    getUserbyUsername,
    deleteAllUser,
    deleteOneUser,
    updateUser,
    createUser
}