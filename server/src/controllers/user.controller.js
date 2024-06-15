import { asyncHandler } from "../utilities/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utilities/apiResponse.js";
import { ApiError } from "../utilities/apiError.js";


const register = asyncHandler(async (req,res) => {
    // const {username,fullname,email,password} = req.body
    // console.log(req.body)
    // if(!username || !email || !fullname || !password){
    //     throw new ApiError(500,"all field are required")
    // }
    // const user = await User.create({
    //     username: username,
    //     fullname: fullname,
    //     email: email,
    //     password: password
    // })

    // return res
    // .status(201)
    // .json(
    //     new ApiResponse(200,user,"done")
    // )
    const {username,fullname,email,password} = req.body
    
    if(!username || !fullname || !email || !password){
        throw new ApiError(400,"All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409,"user already exist")
    }

    const profileLocalPath = req.files?.profilePicture[0]?.path

    if(!profileLocalPath){
        throw new ApiError(400,"profile picture is required")
    }

    const profilePicture = await uploadOnCloudinary(profileLocalPath)//need cloudinary service

    if(!profilePicture){
        throw new ApiError(400,"profile picture is required")
    }

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
        new ApiResponse(201,createdUser,"User registered successfully")
    )

})      

export {register}