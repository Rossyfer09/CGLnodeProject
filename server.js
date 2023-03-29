require('./models/db')
const express = require('express');
const bodyparser = require('body-parser');

const datacontroller = require('./controller/datacontroller');

var cors = require('cors');
const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'UPDATE'], 
  optionsSuccessStatus: 204
}));

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


// API calls

app.get('/', (req, res) => {
  //res.json(req.body);
  res.send(`
      <h2>Dogs's data dashboard</h2>
      <h3>Click here to get access to the <b><a href="/dog/alldogs">Database</a></b></h3>`);
});

app.use("/dog", datacontroller);
app.listen(3002, () => console.log(`server started!`));


