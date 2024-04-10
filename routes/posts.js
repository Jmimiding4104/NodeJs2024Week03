var express = require('express');
var router = express.Router();
const PostControllers = require('../controllers/posts');

/* GET home page. */
router.get('/', PostControllers.getPosts);
router.post('/', PostControllers.createPost);
router.post('/:id', PostControllers.editPost);
router.delete('/', PostControllers.deletePosts);
router.delete('/:id', PostControllers.deletePost);


module.exports = router;
