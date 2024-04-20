const NotFoundError = require('../errors/NotFoundError');
const { User } = require('../models')

class UserRepository {
    async createUser(userData) {
        try {
            const user = await User.create({
                name: userData.name,
                email: userData.email,
                bio: (userData.bio) ? userData.bio : ""
            })
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getUser(user_id) {
        try {
            const user = await User.findById(user_id);
            if (!user) {
                throw new NotFoundError("User", user_id);
            }
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async updateUser(user_id, update_data) {
        try {
            const updated_user = await User.findOneAndUpdate({ _id: user_id }, update_data, { new: true });
            if (!updated_user) {
                throw new NotFoundError('User', user_id);
            }
            return updated_user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserRepository;