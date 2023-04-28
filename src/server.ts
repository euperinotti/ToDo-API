import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import router from './routes';

dotenv.config();

const app = express();

app.use(cors());

// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: true}));

app.use(router);

app.use((req: Request, res: Response) => {
    res.status(200);
    res.json({msg: 'Bem vindo!'});
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`)
});