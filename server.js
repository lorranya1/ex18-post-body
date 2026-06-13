const express = require('express');
const app = express();

// TODO: Adicione o middleware express.json() para parsear o body
app.use(express.json());
// POST /echo → 200, devolve o mesmo JSON recebido no body
app.post('/echo', (req, res) => {
  res.status(200).json(req.body);
});

// O Content-Type da resposta deve ser application/json

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
