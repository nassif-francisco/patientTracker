import {Schema, model} from "mongoose"
import mongoose from 'mongoose'

interface User {
    _id: string;
    name: string;
    lastname: string
}

for (let model in mongoose.models){
    delete mongoose.models[model]
}

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    }
});


export const userModel = model<User>('User', UserSchema);


