import "dotenv/config";
import express, { Application } from "express";
import rotas from "./rotas";

const app: Application = express();

app.use(express.json());
app.use(rotas);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;