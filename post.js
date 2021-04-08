const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const posts = [
    {movieId: "1234", title: 'TitanicReview', url: 'NA', postBody: 'Titanic was really sad!'},
    {movieId: "5678", title: 'HarryPotterOne', url: 'https://www.rogerebert.com/reviews/harry-potter-and-the-sorcerers-stone-2001', postBody: 'NA'},
];

//http://localhost:8000/api/post/
router.get('/', (req, res) => res.send(posts));

//http://localhost:8000/api/post/?title=legallyblonde&url=NA&postBody=greatmovie
router.post('/', (req, res) => {
    const body = req.query;
    const movieId = uuidv4();
    posts.push({
        movieId: movieId,
        title: body.title,
        url: body.url,
        postBody: body.postBody,
    });
    res.status(200).send({message: 'Success!', posts});
});

//http://localhost:8000/api/post/:movieId/1234
router.get('/:movieId', function (req, res) {
    const movieIdSearch = req.params.movieId;
    const foundMovie = posts.find(movieItem => movieItem.movieId === movieIdSearch);
    if (foundMovie) {
        return res.send(foundMovie)
    }
    res.status(404);
    res.send({error: 'No movie found!'});
});

// Updating either the title, postBody, or the url in the post.
//http://localhost:8000/api/post/:title/TitanicReview?title=TitanicReview2&url=Testing
router.put('/:title', (req, res) => {
    const title = req.params.title;
    const newTitle = req.query.title;
    const postBody = req.query.postBody;
    const url = req.query.url;

    const foundMovie = posts.find((movieItem) => movieItem.title === title);
    if (!foundMovie) {
        res.status(404);
        return res.send({error: 'Movie not found!'});
    }

    if (!(newTitle === undefined)) {
        foundMovie.title = newTitle;
    } 
    if (!(postBody === undefined)) {
        foundMovie.postBody = postBody;
    } 
    if (!(url === undefined)) {
        foundMovie.url = url;
    }
    res.status(200).send({message: 'Success!', foundMovie});
});

// DELETE requests can take a body, but we
// can typically handle the request with 
// just the ID
//http://localhost:8000/api/post/:movieId/1234
router.delete('/:movieId', function (req, res) {
    const movieId = req.params.movieId;
    for (var i = posts.length - 1; i >= 0; i--) {
        if (posts[i].movieId === movieId) {
            posts.splice(i, 1);
        }
    }
    
    res.status(200).send({message: 'Success!', posts});
});

module.exports = router;
