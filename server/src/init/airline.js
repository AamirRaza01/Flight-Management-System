import {Airline} from "../models/airline.model.js";
import mongoose from "mongoose";
const mongo_url = "mongodb://127.0.0.1:27017/tripma";

main().then(()=>{
    console.log("connected succesfully");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(mongo_url);
}
const airline =  new Airline({
    name:"ab",
    contactNo: "asdnf"
})

airline.save().then(console.log("done")).catch((err)=>{console.log(err)});