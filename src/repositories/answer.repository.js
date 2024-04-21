const { Answer } = require('../models');
const NotFoundError = require('../errors/NotFoundError');

class AnswerRepository {
    async createAnswer(q_id, answerData) {
        try {
            const answer = await Answer.create({
                question_id: q_id,
                body: answerData.body,
                user_id: answerData.user_id
            })
            return answer;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async updateAnswer(id, answerData) {
        try {
            const updatedAnswer = await Answer.findOneAndUpdate({ _id: id }, answerData, { new: true });
            if (!updatedAnswer) {
                throw new NotFoundError("Answer_id", id);
            }
            return updatedAnswer;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = AnswerRepository;