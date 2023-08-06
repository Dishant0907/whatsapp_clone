import mongoose from 'mongoose';
import dotenv from 'dotenv';
// const mongoose= require('mongoose');

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// const DB= `mongodb://${USERNAME}:${PASSWORD}@ac-gqhsink-shard-00-00.lyyzfsc.mongodb.net:27017,ac-gqhsink-shard-00-01.lyyzfsc.mongodb.net:27017,ac-gqhsink-shard-00-02.lyyzfsc.mongodb.net:27017/?ssl=true&replicaSet=atlas-49r1vq-shard-0&authSource=admin&retryWrites=true&w=majority`

const DB= `mongodb://trydishant2002:Chaiwalayaa@ac-gqhsink-shard-00-00.lyyzfsc.mongodb.net:27017,ac-gqhsink-shard-00-01.lyyzfsc.mongodb.net:27017,ac-gqhsink-shard-00-02.lyyzfsc.mongodb.net:27017/?ssl=true&replicaSet=atlas-49r1vq-shard-0&authSource=admin&retryWrites=true&w=majority`


const Connection=mongoose.connect(DB,{
    useNewUrlParser: true,
  useUnifiedTopology: true
//   useCreateIndex:true,   
//   useFindAndModify:false
}).then(()=>{
    console.log('connection successful');
}).catch((err)=> console.log(err)); 

export default Connection;