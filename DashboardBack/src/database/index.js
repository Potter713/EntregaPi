const mongoose = require('mongoose');

// Conexao com o banco
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-y8xkp.mongodb.net/unifeobpiback?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Padroes
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

module.exports = mongoose;