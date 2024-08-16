import User from '../models/userModel.js';

class UserService {
    async createUser(userData) {
        return await User.create(userData);
    }

    async getUserById(userId) {
        return await User.findByPk(userId);
    }

    async updateUser(userId, userData) {
        const user = await User.findByPk(userId);
        if (user) {
            return await user.update(userData);
        }
        throw new Error('User not found');
    }

    async deleteUser(userId) {
        const user = await User.findByPk(userId);
        if (user) {
            return await user.destroy();
        }
        throw new Error('User not found');
    }
}

export default new UserService();
