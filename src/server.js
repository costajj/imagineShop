import 'dotenv/config';
import express from 'express';

import { UserService } from './services/user-service.js';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    const userService = new UserService();

    await userService.add(
        {
            name: 'Izzie',
            email: 'izzie@mcosta.ca',
            password: '123456'
        }
    )

    res.send('Imagine shop')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})