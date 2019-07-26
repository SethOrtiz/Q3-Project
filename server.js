const port = process.env.PORT || 8000;
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

var routes_setter = require('./config/routes.js');
routes_setter(app);
app.listen(port, function() {
  console.log('Listening on', port);
});