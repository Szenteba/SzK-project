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

app.get('/getTicket', userController.getTicket, console.log("/getTicket kérése"));

app.listen(3000, () => {
    console.log('Server is running on port 3000 Forwarded to 3022');
});