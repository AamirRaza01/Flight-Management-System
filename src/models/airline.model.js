import mongoose from "mongoose";

const airlineSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    contactNo:{
        type:String,
        default:'xx xxxx xxxx'
    }

})

const Airline =  new mongoose.model('Airline',airlineSchema);

export {Airline};