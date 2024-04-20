class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async createUser(userData) {
        try {
            const user = this.userRepository.createUser(userData);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}



module.exports = UserService;