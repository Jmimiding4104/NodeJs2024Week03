const errHandle = require('../service/errHandle');
const successHandle = require('../service/succesHandle');

const Post = require('../models/postSchema');

const posts = {
    async getPosts({ req, res }) {
        const post = await Post.find();
        successHandle(res, post);
    },
    async createPost(req, res) {
        try {
            const { body } = req;
            if (body.content !== undefined) {
                const newPost = await Post.create(
                    {
                        name: body.name,
                        content: body.content,
                        tags: body.tags,
                        type: body.type
                    }
                );
                successHandle(res, newPost);
            } else {
                errHandle(res)
            }
        } catch (err) {
            errHandle(res)
        }
    },
    async editPost(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;
            if (body.content !== undefined) {
                const editContent = {
                    name: body.name,
                    content: body.content,
                    tags: body.tags,
                    type: body.type
                };
                //更新後最新的 DATA
                const editPost = await Post.findByIdAndUpdate(id, editContent, { new: true });
                successHandle(res, editPost);
            } else {
                errHandle(res);
            }
        } catch (err) {
            errHandle(res);
        };
    },
    async deletePosts(req, res) {
        await Post.deleteMany({});
        await posts.getPosts({ req, res })
    },
    async deletePost( req, res ) {
        try {
            const { id } = req.params;
            await Post.findByIdAndDelete(id);
            await posts.getPosts({ req, res })
        } catch (err) {
            errHandle(res);
        }
    }
}

module.exports = posts;