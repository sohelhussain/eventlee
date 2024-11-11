const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('server are wroking preperly')
})

app.listen(8000)