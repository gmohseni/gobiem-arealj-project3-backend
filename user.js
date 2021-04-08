const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// const comments = [
//     {commentId: "2222", text: 'Great review!'},
//     {commentId: "1111", text: 'I agree fully.'},
// ];

//http://localhost:8000/api/comment/?text=Itsucked
// router.post('/', (req, res) => {
//     const body = req.query;
//     const commentId = uuidv4();
//     comments.push({
//         commentId: commentId,
//         text: body.text,
//     });
//     res.status(200).send({message: 'Success!', comments});
// });

// //http://localhost:8000/api/comment/:commentId/1111
// router.get('/:commentId', function (req, res) {
//     const commentIdSearch = req.params.commentId;
//     const foundComment = comments.find(commentItem => commentItem.commentId === commentIdSearch);
//     if (foundComment) {
//         return res.send(foundComment)
//     }
//     res.status(404);
//     res.send({error: 'No comment found!'});
// });

module.exports = router;
