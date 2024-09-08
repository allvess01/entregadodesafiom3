const express = require('express');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb://localhost/meusEventos');


const eventoSchema = new mongoose.Schema({
  id: String,
  nome: String,
  endereco: String,
  data: Date,
  preco: Number
});

const Evento = mongoose.model('Evento', eventoSchema);

app.get('/eventos', async (req, res) => {
  const maxPreco = req.query.maxPreco;


  if (maxPreco) {
    const isNumeric = /^\d+$/.test(maxPreco);
    const parsedMaxPreco = parseInt(maxPreco);

    if (!isNumeric || parsedMaxPreco < 0) {
      return res.status(400).json({ mensagem: 'O preço máximo do evento deve conter apenas números e ser positivo' });
    }
  }

  /
  const query = {};
  if (maxPreco) {
    query.preco = { $lte: parsedMaxPreco };
  }

  const eventos = await Evento.find(query);
  res.json(eventos);
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});