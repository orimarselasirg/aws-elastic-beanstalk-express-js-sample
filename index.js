const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const test = require('./routes/test')


app.get('/', (req, res) => res.send('Hello World!, and this is test, prueba pipeline!'));
app.get('/test', test)

app.listen(port, ()=>{
    console.log(`App running on http://localhost:${port}`);
});
