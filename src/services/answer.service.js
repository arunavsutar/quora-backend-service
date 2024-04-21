
class AnswerService {
    constructor(answerRepository) {
        this.answerRepository = answerRepository;
    }
    async createAnswer(q_id, answerData) {
        try {
            const answer = this.answerRepository.createAnswer(q_id, answerData);
            return answer;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateAnswer(a_id, answerData) {
        try {
            const answer = this.answerRepository.updateAnswer(a_id, answerData);
            return answer;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = AnswerService;