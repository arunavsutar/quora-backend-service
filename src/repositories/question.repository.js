const { Question } = require('../models');

class QuestionRepository {
    async createQuestion(questionData) {
        try {
            const question = await Question.create({
                title: questionData.title,
                body: questionData.body,
                topics: (questionData.topics) ? questionData.topics : [],
                user_id: questionData.user_id
            })
            return question;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getQuestionsByTitle(find_title) {
        try {
            const question = await Question.find({ title: find_title })
            return question;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getQuestionsByTopics(find_topics) {
        try {
            const question = await Question.find({ topics: { $in: find_topics } })
            return question;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = QuestionRepository;