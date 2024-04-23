const { Comment, Answer } = require('../models');

class CommentRepository {
    async comment(parent_type, parent_id, commentData) {
        try {
            if (parent_type == "answers") {
                const parent_data = await Answer.exist({ _id: parent_id });
                if (!parent_data) {
                    throw new NotFoundError("Parent Answer", id);
                }
            }
            else if (parent_type == "comments") {
                const parent_data = await Comment.exist({ _id: parent_id });
                if (!parent_data) {
                    throw new NotFoundError("Parent Comment", id);
                }
            }
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