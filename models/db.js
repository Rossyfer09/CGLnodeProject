const mongoose = require('mongoose');
require('./dog.model');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://user123:user123@cluster0.nj8a55s.mongodb.net/DogsData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

  

