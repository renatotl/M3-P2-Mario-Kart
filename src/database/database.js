const mongoose = require('mongoose');

function connectToDataBase() {
  mongoose
    .connect('mongodb://localhost:27017/mariokart-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Mongodb CONECTED!'))
    .catch((error) =>
      console.log(`Error to conect to mongoDB, error: ${error}`),
    );
}

module.exports = connectToDataBase;
