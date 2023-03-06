require('./models/db')
const express = require('express');
const bodyparser = require('body-parser');

const expenseController = require('./controller/expenseController');

var cors = require('cors');
const app = express();
app.use(cors());

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


// API calls

app.get('/', (req, res) => {
  //res.json(req.body);
  res.send(`
      <h2>Jenn's expense dashboard</h2>
      <h3>Click here to get access to the <b><a href="/expense/allexpenses">Database</a></b></h3>`);
});


app.use("/expense", expenseController);
app.listen(3002, () => console.log(`server started!`));


