const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
 
app.get('/', (req,res) => {
    res.send('Yo dawg');
})

app.get('/upload', (req,res) => {
    res.send('Uploaded!');
})
 
app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
})