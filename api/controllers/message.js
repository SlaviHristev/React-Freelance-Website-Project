import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js"
import createError from "../utils/createError.js"


export const createMessage = async (req, res, next) => {
    const newMessage = new Message({
        conversationId: req.body.conversationId,
        userId: req.userId,
        desc: req.body.desc
    })
    try {
        const saveMessage = await new newMessage.save();
        await Conversation.findOneAndUpdate({
            id:req.body.conversationId
        },{$set:{
            readByBuyer:!req.isSeller,
            readBySeller:req.isSeller,
            lastMessage:req.body.desc
        }},{
            new:true
        });

        res.status(201).send(saveMessage)
    } catch (error) {
        next(error)
    }
}

export const getMessages = async (req, res, next) => {

    try {
        const messages = await Message.find({ conversationId: req.params.id });
        res.status(200).send(messages)
    } catch (error) {
        next(error)
    }
}