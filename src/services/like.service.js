

class LikeService {
    constructor(likeRepository) {
        this.likeRepository = likeRepository;
    }
    async createLike(type, id, user_id) {
        try {
            const liked_data = this.likeRepository.createLike(type, id, user_id);
            return liked_data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = LikeService;