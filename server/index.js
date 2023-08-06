import express from 'express';
import mongoose from 'mongoose';
import Connection from './database/db.js';
import Route from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Route);


// const mongoose= require('mongoose');


const PORT = 8000;
app.listen(PORT, () => {console.log(`sever is running at port ${PORT} `)})