const express = require('express');
const post = require('./post.js');
const comment = require('./comment.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.json({ type: ['application/json', 'text/plain']}));

// Note that it is common practice got backend APIs in Node to start with the api prefix
// to distinguish them from frontend routes
app.use('/api/post', post);
app.use('/api/comment', comment);

app.listen(8000, function() {
    console.log('Server is on!');
});
