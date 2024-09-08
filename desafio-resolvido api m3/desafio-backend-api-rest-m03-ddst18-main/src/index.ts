const express = require('express');
const app = express();
const PORTA = process.env.PORTA || 3000;


app.use(express.json());


const rotas = require('./rotas');
app.use('/api', rotas);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

app.listen(PORTA, () => {
    console.log(`API rodando na porta ${PORTA}`);
});

module.exports = app;