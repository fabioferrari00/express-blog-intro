const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


const posts = [
  {
    title: "Napoli",
    content: "lorem ipsum dolor",
    img: "/imgs/city/Napoli.jpeg",
    tags: ['Mario', 'Filippo', 'Maria', 'Fabio']
  },
  {
    title: "Roma",
    content: "lorem ipsum dolor",
    img: "/imgs/city/Roma.jpeg",
    tags: ['Mario', 'Andrea', 'Maria', 'Luca']
  },
  {
    title: "Milano",
    content: "lorem ipsum dolor",
    img: "/imgs/city/Milano.jpeg",
    tags: ['Mario', 'Filippo', 'Maria', 'Fabio', 'Gianluca']
  },
  {
    title: "Torino",
    content: "lorem ipsum dolor",
    img: "/imgs/city/Torino.jpeg",
    tags: ['Mario', 'Filippo', 'Andrea']
  },
  {
    title: "Bergamo",
    content: "lorem ipsum dolor",
    img: "/imgs/city/Bergamo.jpeg",
    tags: ['Maria', 'Fabio', 'Giusy']
  },
]

app.get('/', (req, res) => {
  console.log('Server del mio blog');
})

app.get('/bacheca', (req, res) => {
  res.json(posts);
})


//dico al server di rimanere in ascolto
app.listen(port, () => {
  console.log(`Server in ascolto alla porta ${port}`);
})