const NotImplemented = require("../errors/NotImplementedError");

class TopicService {
    constructor(topicRepository) {
        this.topicRepository = topicRepository;
    }

    async createTopic(topic) {
        try {
            const Topic = this.topicRepository.createTopic(topic);
            return Topic;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getTopics() {
        try {
            const topics = this.topicRepository.getTopics();
            return topics;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = TopicService;