require('dotenv').config();
const express = require('express');
const app = express();
require('./models/db')
const indexRouter = require('./router/indexRouter')
require('./models/db').connectDatabase();

app.use("/api/v1",indexRouter)

app.listen(8000)