import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { create, getposts, deletepost, updatepost, getallposts } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getallposts', getallposts)
router.get('/getposts', verifyToken, getposts)
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost)
router.put('/updatepost/:postId/:userId', verifyToken, updatepost)

export default router