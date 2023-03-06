require('./models/db')
const express = require('express');
const bodyParser = require('body-parser');

const expenseController = require('./controller/expenseController');

const app = express();

app.use(bodyParser.json());


// API calls

app.get('/', (req, res) => {
  //res.json(req.body);
  res.send(`
      <h2>Jenn's expense dashboard</h2>
      <h3>Click here to get access to the <b><a href="/expense/allexpenses">Database</a></b></h3>`);
});


app.use("/expense", expenseController);
app.listen(3002, () => console.log(`server started!`));


