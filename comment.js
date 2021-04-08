const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const comments = [
    {commentId: "2222", text: 'Great review!'},
    {commentId: "1111", text: 'I agree fully.'},
];

//http://localhost:8000/api/comment/
router.get('/', (req, res) => res.send(comments));

//http://localhost:8000/api/comment/?text=Itsucked
router.post('/', (req, res) => {
    const body = req.query;
    const commentId = uuidv4();
    comments.push({
        commentId: commentId,
        text: body.text,
    });
    res.status(200).send({message: 'Success!', comments});
});

//http://localhost:8000/api/comment/:commentId/1111
router.get('/:commentId', function (req, res) {
    const commentIdSearch = req.params.commentId;
    const foundComment = comments.find(commentItem => commentItem.commentId === commentIdSearch);
    if (foundComment) {
        return res.send(foundComment)
    }
    res.status(404);
    res.send({error: 'No comment found!'});
});

// Updating either the title, postBody, or the url in the post.
//http://localhost:8000/api/comment/:commentId/2222?text=changedmymind
router.put('/:commentId', (req, res) => {
    const commentId = req.params.commentId;
    const text = req.query.text;

    const foundComment = comments.find(commentItem => commentItem.commentId === commentId);
    if (!foundComment) {
        res.status(404);
        return res.send({error: 'Comment not found!'});
    }

    if (!(text === undefined)) {
        foundComment.text = text;
    } 
    res.status(200).send({message: 'Success!', foundComment});
});

// DELETE requests can take a body, but we
// can typically handle the request with 
// just the ID
//http://localhost:8000/api/comment/:commentId/1111
router.delete('/:commentId', function (req, res) {
    const commentId = req.params.commentId;
    for (var i = comments.length - 1; i >= 0; i--) {
        if (comments[i].commentId === commentId) {
            comments.splice(i, 1);
        }
    }
    
    res.status(200).send({message: 'Success!', comments});
});

module.exports = router;
