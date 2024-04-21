const { Comment } = require('../models');

class CommentRepository {
    async comment(parent_type, parent_id, commentData) {
        try {
            const commentedData = await Comment.create({
                parent_id: parent_id,
                parent: parent_type,
                body: commentData.body,
                user_id: commentData.user_id
            })
            return commentedData;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = CommentRepository;