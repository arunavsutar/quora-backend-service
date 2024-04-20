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
}

module.exports = UserRepository;