import express from 'express';
import cors from 'cors';
import { userController } from './Controllers/user_controller.js';


const app = express();
app.use(cors());

app.use(express.json());

app.get('/semmi', (req, res) => {
    const mockUser = {
        id: 1,
        name: 'John Doe',
        email: 'nincs'
    }
    res.json(mockUser);
});

app.get('/getTicket', (req, res, next) => {
    console.log("/getTicket kérése");
    next();
}, userController.getTicket) ;

app.listen(3000, () => {
    console.log('Server is running on port 3000 Forwarded to 3022');
});