const express = require('express');
const {body} = require('express-validator')
const router = express.Router();
const feedController = require('../controllers/feed');

router.get('/posts',feedController.getFeed);

router.post('/post',[
    body('title')
    .trim()
    .isLength({min:5}),
    body('content')
    .trim()
    .isLength({min:5})
],feedController.postFeed);

router.get('/post/:postId',feedController.getPost);

router.put('/post/:postId',[
    body('title')
    .trim()
    .isLength({min:5}),
    body('content')
    .trim()
    .isLength({min:5})
],feedController.updatePost);

module.exports =router;