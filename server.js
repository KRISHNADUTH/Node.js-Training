const express = require('express');
const mongoose = require('mongoose');
const res = require('express/lib/response');
const app = express();
const port = 8001
const mongoUrl = 'mongodb://Khabib:Khabib123@ac-d17bovc-shard-00-00.cdefmn6.mongodb.net:27017,ac-d17bovc-shard-00-01.cdefmn6.mongodb.net:27017,ac-d17bovc-shard-00-02.cdefmn6.mongodb.net:27017/?ssl=true&replicaSet=atlas-zw0rcy-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(mongoUrl).then(() => console.log("Connected"));

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.post('/post', (req, res) => {
    res.send("This is our post method")
})

app.put('/put', (req, res) => {
    res.send("This is out put method");
})

app.delete('/delets', (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})