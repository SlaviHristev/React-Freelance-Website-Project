import express from 'express';
import { verifyToken } from '../middlewares/jwt.js';
import { makeUpload } from '../controllers/upload.js';


const router = express.Router();

router.post('/', verifyToken, makeUpload);

export default router;