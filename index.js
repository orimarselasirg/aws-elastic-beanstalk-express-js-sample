const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const test = require('./routes/test')
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!, and this is test, prueba pipeline!'));
app.use('/', test)

app.listen(port, ()=>{
    console.log(`App running on http://localhost:${port}`);
});
