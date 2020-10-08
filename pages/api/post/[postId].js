
import {posts} from "../../../src/blog-posts";



export default (req, res) => {
    res.json({
        post: posts.find(post=> post.slug === req.query.postId)
            
    });
}