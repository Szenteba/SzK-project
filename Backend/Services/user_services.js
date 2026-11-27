import { userRepository } from '../repository/user_repository.js';

export const userServices = {
    getTicket: async (req, res) => {
        const ticket = await userRepository.getTicket(res);
        console.log("Ticket lekérése a service-ből:", ticket);
        const ticketPerRow = ticket.map(row => ({
            id: row.id,
            nev: row.nev,
            helyszin: row.helyszin,
            leiras: row.leiras,
            ar: row.ar,
            lejarat: row.lejarat
        }));
        return res.json(ticketPerRow);
    }
}
