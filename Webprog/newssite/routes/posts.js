const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//Routes
router.get('/posts', (req, res) => {
    res.send('ratatata');
});

router.get('/specific', (req, res) => {
    res.send('ratatata');
});

router.post('/',(req,res)=>{
    console.log(req, body);
});

module.exports = router;