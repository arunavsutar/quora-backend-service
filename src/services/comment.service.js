
class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async comment(parent_type, parent_id, commentData) {
        try {
            const comm = this.commentRepository.comment(parent_type, parent_id, commentData);
            return comm;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = CommentService;