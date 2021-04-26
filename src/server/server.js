const express = require('express');

const port = process.env.PORT;

const app = express();

const publicDirectory = './dist';

app.use(express.static(publicDirectory));

app.get('/',(req,res)=>{
    res.sendFile('index.html');
})
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})