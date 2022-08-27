const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');


app.get('/', (req, res) => res.send('Hello World!, and this is test, prueba pipeline!'));

app.listen(port, ()=>{
    console.log(`App running on http://localhost:${port}`);
});
