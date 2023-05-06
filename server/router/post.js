const express=require('express')
const router=express.Router()
const multer=require('multer')
const upload = multer({ dest: 'uploads/' })

const {getPost, createPost,deletePost, selectPost}=require('../controller/post')

router.route('/').get(getPost).post(upload.single('selectedfile'),createPost)
router.route('/:id').get(selectPost).delete(deletePost)

module.exports=router