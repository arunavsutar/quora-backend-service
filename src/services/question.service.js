

class QuestionService {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }
    async createQuestion(questionData) {
        try {
            const question = this.questionRepository.createQuestion(questionData);
            return question;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getQuestions(find_details) {
        try {
            console.log(find_details);
            if (find_details.title) {
                const title_question = this.questionRepository.getQuestionsByTitle(find_details.title);
                return title_question;
            }
            if (find_details.topics) {
                const topic_questions = this.questionRepository.getQuestionsByTopics(find_details.topics);
                return topic_questions;
            }
            const questions = Array.from(new Set(title_question.concat(topic_questions)));;
            return questions;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = QuestionService;