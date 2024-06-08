import dotenv from "dotenv"
import connectDB from "./database/index.js";
import {app} from './app.js'
import http from 'http'
import {Server} from 'socket.io'

dotenv.config({
    path: './.env'
})

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin: '*',
        methods: ["GET", "POST"],
        credentials: true
    }
})

io.on("connection", (socket) => {
    console.log("New client connected", socket.id);

    // Event handler for user registration to rooms
    socket.on("register", (userId) => {//user id will come from the client side
        socket.join(userId);
        console.log(`User ${userId} registered with socket ${socket.id}`);
    });

    // Handle client disconnection
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});
export {io}
connectDB()
.then(() => {
    server.on("error",(err) => {
        throw err
    })
    server.listen(8000, () => {
        console.log('Server is running at port : 8000');
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})