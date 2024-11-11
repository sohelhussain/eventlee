const express = require('express');
const app = express();
const indexRouter = require('./router/indexRouter')

app.use("/api/v1",indexRouter)

app.listen(8000)