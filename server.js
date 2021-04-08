const express = require('express');
const app = express();

// Notice how I'm specificifying a specific endpoint
// and HTTP verb (here `get`)
app.get('/', (req, res) => {
    res.send('Hello web dev!');
});

// login







// This list will be accessible to everything in this file
// const comments = [
//     ...
//   ]
  
//   app.post("/comments", (req, res) => {
//        comments.push(...);
  
//        ....
//   }

app.listen(8000, () => {
  console.log('Starting server');
});