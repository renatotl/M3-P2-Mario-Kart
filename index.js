const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const route = require('./src/routes/characters.route');
const connectToDataBase = require('./src/database/database');

connectToDataBase();
app.use(cors());// o cors vem ante da rota. evita problema com o front
app.use(express.json());
app.use('/characters', route);

app.listen(port, () => {
  console.log(`Serve work on http://localhost:${port}`);
});
