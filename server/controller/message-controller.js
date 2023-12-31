import Message from "../model/message.js";
import Conversation from "../model/Conversation.js";
import { response } from "express";

export const newMessage = async (request,response) =>{
    try {
        const newMessage=new Message(request.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId,{message:request.body.text});
        return response.status(200).json('message has been set successfully')
    } catch (error) {
        console.log('message not saved ',error.message)
        
    }


}

export const getMessages = async (request,response) =>{
    try {
        const messages = await Message.find({conversationId:request.params.id});
        return response.status(200).json(messages)
    } catch (error) {
        return response.status(500).json(error.message)
    }
}