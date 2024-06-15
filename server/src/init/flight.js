import { Flight } from "../models/flights.model.js";
import {sFlights} from "./flightdata.js";
import mongoose from "mongoose";
const mongo_url = "mongodb://127.0.0.1:27017/tripma";

main().then(()=>{
    console.log("connected succesfully");
})
.catch((err)=>{
    console.log(err);
})

async function  main(){
    await mongoose.connect(mongo_url);
};
const saveFlight =async () =>{
    await Flight.deleteMany({});
    await Flight.insertMany(sFlights);
    console.log("flights added");
}

saveFlight();