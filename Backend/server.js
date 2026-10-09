const express = require('express');
const app = express();


app.use(express.json());

app.get('/semmi', (req, res) => {
    const mockUser = {
        id: 1,
        name: 'John Doe',
        email: 'nincs'
    }
    res.json(mockUser);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});