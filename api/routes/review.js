import express from 'express';
import { verifyToken } from '../middlewares/jwt';
import { createReview, getReviews, deleteReview} from '../controllers/review.js'

const router = express.Router();

router.post('/', verifyToken, createReview);
router.get('/:id', getReviews);
router.delete('/:id', deleteReview);


export default router;