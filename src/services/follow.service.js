

class FollowService {
    constructor(followRepository) {
        this.followRepository = followRepository;
    }
    async createFollow(id, traget_id) {
        try {
            const followed_user = this.followRepository.createFollow(id, traget_id);
            return followed_user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = FollowService;