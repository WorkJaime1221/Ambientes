const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//creamos server
const app = express();

//conectamos
conectarDB();
app.use(cors());
app.use(express.json());
app.use('/api/productos', require('./routes/producto'));


app.listen(4000, () => {
    console.log("El servidor esta arriba")
})