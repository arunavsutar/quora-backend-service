const NotImplemented = require('../errors/NotImplementedError');
const { Topic } = require('../models');

class TopicRepository {
    async createTopic(topic) {
        try {
            const res = await Topic.exists({ name: topic.name });
            if (res == null) {
                const created_topic = await Topic.create(topic);
                return created_topic;
            }
            else {
                throw new NotImplemented("Topic Existss.");
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTopics() {
        try {
            const topics = await Topic.find({});
            return topics;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async isTopicPresent(topic_name) {
        try {
            const topic = await Topic.find({ name: topic_name });
            return topic;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = TopicRepository;