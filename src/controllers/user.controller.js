import { asyncHandler } from "../utilities/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utilities/apiResponse.js";
import { ApiError } from "../utilities/apiError.js";
import { History } from "../models/history.model.js";


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
    
    // if(!username || !fullname || !email || !password){
    //     throw new ApiError(400,"All fields are required")
    // }

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

const generateRefreshAccessToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken= user.generateRefreshToken()
        // console.log(accessToken)
        // console.log(refreshToken)

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken,refreshToken}
    } catch (error) {
        throw new ApiError(500,"Something went wrong")
    }
}

const login = asyncHandler(async (req,res) => {
    const {email,username,password} = req.body

    if(!username && !email){
        throw new ApiError(400,"username or email is required")
    }

    const user = await User.findOne({
        $or: [{username},{email}]
    })

    if(!user){
        throw new ApiError(404,"user doesnot exist")
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password)

    if(!isPasswordCorrect){
        throw new ApiError(401,"invalid user password")
    }
    const {accessToken,refreshToken} = await generateRefreshAccessToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser,accessToken,refreshToken
            },
            "user logged in successfully"
        )
    )
})

const logout = asyncHandler(async (req,res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(
        new ApiResponse(200,{},"User logged out")
    )
})

const refreshAccessToken = asyncHandler(async (req,res) => {
    try {
        const RefreshToken = req.cookies.refreshToken || req.body.refreshToken

        if(!RefreshToken){
            throw new ApiError(401,"Unauthorized request")
        }

        const decodedToken = jwt.verify(
            RefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
        
        const user = await User.findById(decodedToken._id)

        if(!user){
            throw new ApiError(401,"Invalid refresh token")
        }

        if(RefreshToken!==user?.refreshToken){
            throw new ApiError(401,"Refresh token is expired")
        }

        const options = {
            httpOnly: true,
            secure: true
        }

        const {accessToken,refreshToken} = await generateRefreshAccessToken(user._id)

        return res
        .status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken",refreshToken,options)
        .json(
            new ApiResponse(
                200,
                {accessToken,refreshToken},
                "Access token is refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401,"Invalid refresh token")
    }
})

const getHistory = asyncHandler(async (req,res) => {
        try {
            const userId = req.user._id
            const bookingHistory = await History.findById(userId)
            .populate({
                path: "flight",
                select: 'airline flightNumber departureAirport arrivalAirport departureDateTime arrivalDateTime price seatsAvailable'
            }).exec()

            if(!bookingHistory){
                throw new ApiError(400,"Something went wrong")//to keep in check
            }

            return res
            .status(200)
            .json(
                new ApiResponse(200,bookingHistory,"Booking history fetched successfully")
            )
        } catch (error) {
            throw new ApiError(500,"Something went wrong")
        }
})

export {
    register,
    login,
    logout,
    refreshAccessToken,
    getHistory
}