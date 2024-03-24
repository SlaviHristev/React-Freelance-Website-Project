import express from 'express';
import { verifyToken } from '../middlewares/jwt.js';
import { createOrder,getOrders} from '../controllers/order.js'

const router = express.Router();

router.post('/:gigId',verifyToken, createOrder);
router.get('/',verifyToken,getOrders);


export default router;