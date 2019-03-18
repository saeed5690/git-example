
const express = require('express');
const app = express();

app.get("/",(req,res)=>
{
    res.send('Hello');
});

app.listen(3000,()=>
{
    console.log('Server Is Running On Port 3000');
});