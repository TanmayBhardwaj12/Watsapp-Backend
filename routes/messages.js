import express from 'express';
import Messages from '../models/messages.js';

const messageRouter = express.Router();

messageRouter.get('/sync',(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err:err});
        }else {
            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.json(data)
        }
    })
})

messageRouter.post('/new',(req,res)=>{
    const message = req.body;
    Messages.create(message,(err,data)=>{
        if (err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err:err})
        } else {
            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.json(data)
        }
    })
})

export default messageRouter;