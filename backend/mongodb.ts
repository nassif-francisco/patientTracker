// @ts-nocheck
import mongoose from 'mongoose';
const MONGODB_URI = 'mongodb+srv://nassif:montser3@cluster0.qeusx.mongodb.net/myFirstDatabase?retryWrites=true&w=majorit';

let isConnected = false

export async function connectMongoDb(){
    if (isConnected) {
        return;
    }

    try{
    
    await mongoose.connect('mongodb+srv://nassif:montser3@cluster0.qeusx.mongodb.net/sample_mflix?retryWrites=true&w=majority', {
        useNewUrlParser:true
    })
    console.log(`>>> DB is connected`);

    isConnected = true
    }
    catch(e){
        console.log('Something went wrong');
        console.log(e);
    }
}
