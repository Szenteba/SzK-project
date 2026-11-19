import { userRepository } from '../repository/user_repository.js';

export const userServices = {
    getTicket: async (req, res) => {
        await userRepository.getTicket(res);
    }
}