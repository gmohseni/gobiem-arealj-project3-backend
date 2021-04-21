const express = require('express');
const mongoose = require('mongoose');
const post = require('./post.js');
const comment = require('./comment.js');
const cors = require('cors');

import postRoutes from './routes/posts.js';
import commentRoutes from './routes/comments.js';
import accountRoutes from './routes/account.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Note that it is common practice got backend APIs in Node to start with the api prefix
// to distinguish them from frontend routes
app.use('/post', postRoutes);
// app.use('/comment',commentRoutes);
app.use('/account',accountRoutes);
// app.use('/api/comment', comment);
app.get('/', (req,res) => {
    res.send('Our API')
});

const CONNECTION_URL = 'mongodb+srv://gmohseni:project3@cluster0.llroe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

// app.listen(8000, function() {
//     console.log('Server is on!');
// });
