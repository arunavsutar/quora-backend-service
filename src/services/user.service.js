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
    async getUser(user_id) {
        try {
            const user = this.userRepository.getUser(user_id);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async updateUser(user_id,update_data){
        try {
            const updated_user = this.userRepository.updateUser(user_id,update_data);
            return updated_user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}



module.exports = UserService;