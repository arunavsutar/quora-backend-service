const NotFoundError = require("../errors/NotFoundError");
const { User } = require("../models");
class FollowRepository {
    async createFollow( id, target_id) {

        try {
            const user = await User.exist({ _id: target_id });
            if (user == null) {
                throw new NotFoundError("Targeted_User", target_id);
            }
            const followed_user = await User.findOneAndUpdate({ _id: target_id }, { $push: { followed_by: id } }, { new: true });
            if (!followed_user) {
                throw new NotFoundError("User", id);
            }
            return followed_user;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = FollowRepository;