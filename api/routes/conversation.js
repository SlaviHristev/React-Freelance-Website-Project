import express from 'express';
import { verifyToken } from '../middlewares/jwt.js';
import {getConversations,createConversation,getSingleConversation,updateConversation} from '../controllers/conversation.js'

const router = express.Router();

router.get('/',verifyToken,getConversations);
router.get('/',verifyToken,createConversation);
router.get('/single/:id',verifyToken,getSingleConversation);
router.get('/:id',verifyToken,updateConversation);

export default router;