const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI  ||   'mongodb+srv://maher:maher9326@cluster0.nf63j.mongodb.net/graph?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
