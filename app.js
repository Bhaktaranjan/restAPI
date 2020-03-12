const express = require('express');
const  app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// middlewares
app.use(bodyParser.json());
// Import Routes
const postsRoute = require('./routes/posts');

// middlewares
app.use('/posts', postsRoute);


// ROUTES
app.get('/', (req, res) => {
    res.send('I am in Bhaktaran Home page');
})

// app.get('/post', (req, res) => {
//     res.send('I am in Bhaktaran Post page');
// })

// Connect to mongo DB
const db = mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('DB connection done')
);

// Start server on port 3000 to LISTEN
app.listen(3000, () => console.log('Server listening on port 3000'));