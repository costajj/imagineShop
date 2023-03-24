import 'dotenv/config';
import express from 'express';

import { UserService } from './services/user-service.js';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send('Imagine shop');
});

app.post('/users', async (req, res) => {
    const { name, email, password} = req.body;
    const user = {name, email, password};
    const userService = new UserService();
    await userService.create(user);
    return res.status(201).json();

});


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


// aula 37 4:11 ou -19:22