const NotFoundError = require("../errors/NotFoundError");
const { Question, Answer, Comment, User } = require("../models");
class LikeRepository {
    async createLike(type, id, user_id) {

        try {
            const user = await User.exist({ _id: user_id });
            if (user == null) {
                throw new NotFoundError("User", user_id);
            }
            if (type == "question") {
                const liked_data = await Question.findOneAndUpdate({ _id: id }, { $push: { liked_by: user_id } }, { new: true });
                if (!liked_data) {
                    throw new NotFoundError("Question", id);
                }
                return liked_data;
            }
            else if (type == "answer") {
                const liked_data = await Answer.findOneAndUpdate({ _id: id }, { $push: { liked_by: user_id } }, { new: true });
                if (!liked_data) {
                    throw new NotFoundError("Answer", id);
                }
                return liked_data;
            }
            else if (type == "comment") {
                const liked_data = await Comment.findOneAndUpdate({ _id: id }, { $push: { liked_by: user_id } }, { new: true });
                if (!liked_data) {
                    throw new NotFoundError("Comment", id);
                }
                return liked_data;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = LikeRepository;