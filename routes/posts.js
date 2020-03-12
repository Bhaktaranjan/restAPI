const express = require('express');
const router = express.Router();
const Post = require('../models/schools');

router.get('/', (req, res) => {
    res.send('I am in Bhaktaran Post page');
});

router.get('/specific', (req, res) => {
    res.send('I am in Bhaktaran Specific Post page');
});

router.post('/addSchool', (req, res) => {
    //res.send('I am in Bhaktaran Post page from postman' + req.body);
    // console.log(req.body);
    const post = new Post({
        name: req.body.name,
        location: req.body.location,
        authority: req.body.authority
    });

    post.save();
})

module.exports = router;