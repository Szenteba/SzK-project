import { userServices } from '../Services/user_services.js';

export const userController = {
    getTicket: (req, res) => {
        userServices.getTicket(req, res);
        return json(res.body);
    }
}