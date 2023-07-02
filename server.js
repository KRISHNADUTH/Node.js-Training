const express = require('express');
const res = require('express/lib/response');
const app = express()

const port = 3000

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