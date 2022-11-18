const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const middlewares = require("./middlewares");
const register = require("./api/register");
const login = require("./api/login");
const payment = require("./api/payment");
const passport = require("passport")


require("./models/model");
require('./auth/passport')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan());
app.use(helmet());
app.use(cors());
app.use(express.json());


app.post('/login',login)
app.post('/register', register)
app.get('/payment',passport.authenticate("jwt",{session : false}),payment)




const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});