import Conversation from "../models/Conversation.js"
import createError from "../utils/createError.js"


export const createConversation = async (req,res,next) =>{
    const newConversation = new Conversation({
        id:req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller
    })
    try {
        const savedConversation = await newConversation.save();
        res.status(201).send(savedConversation)
    } catch (error) {
        next(error)
    }
}

export const getConversations = async (req,res,next) =>{

    try {
        
    } catch (error) {
        next(error)
    }
}

export const getSingleConversation = async (req,res,next) =>{

    try {
        
    } catch (error) {
        next(error)
    }
}

export const updateConversation = async (req,res,next) =>{

    try {
        
    } catch (error) {
        next(error)
    }
}