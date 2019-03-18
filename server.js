
const express = require('express');
const app = express();

app.get("/",(req,res)=>
{
    res.send('Hello');
});

var port = 5000;

app.listen(port,()=>
{
    console.log(`Server Is Running On Port ${port}`);
});