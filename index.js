const express = require('express');
const app = express();

app.use(express.json());

const randBo = () => Math.random() > 0.5

app.get('/array', (req, res) => {
  let resultado = []
  
  
  for (let i = 0; i < 3; i++) {
    let periodes = []

    for (let i = 0; i < 6; i++) {
      periodes.push({isOc: randBo(), id: Math.random(10000)})
    }

    let element = {
      day: i,
      periodes: periodes
    }
    resultado.push(element)
  }

  res.send(resultado)
  console.log("sended")

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});