//sams code
// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://newuser:newuser123@cluster0.nj8a55s.mongodb.net/MyExpenseTracker',{
//     useNewUrlParser: true
// },
// err => {
//     if (!err) {
//         console.log('Connection succeeded');
//     } else {
//         console.log('Error in connection' + err);
//     }
// });

// require('./expense.model');


//changed the code to avoid error (throw new MongooseError('Mongoose.prototype.connect() no longer accepts a callback');)

const mongoose = require('mongoose');
require('./expense.model');

mongoose
  .connect('mongodb+srv://newuser:newuser123@cluster0.nj8a55s.mongodb.net/MyExpenseTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });



