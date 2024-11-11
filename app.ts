import { connect } from 'mongoose';
import express from 'express';
import professorRouter from "./routes/professor"

const app = express();
app.use(express.json());
app.use('/professores', professorRouter);




connect('mongodb+srv://joaoeduardo:ylr4u70pwcoZdNps@cluster0.ae7gl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(3000, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 3000');
        })
    })
    .catch((err) => {
        console.log(err);
    });
