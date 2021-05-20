//importing
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

//routes
import indexRouter from './routes/index.js';
import messageRouter from './routes/messages.js';

//app config
const app = express()
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());

//DB config
mongoose.connect(process.env.MONGO_URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//?????



//API routes
app.use('/', indexRouter);
app.use('/messages', messageRouter);


//listen
app.listen(port,()=>console.log(`Listening on localhost ${port}`));