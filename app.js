const express = require('express');
const app = express();
app.use(express.json())
const libroRoutes = require('./Routes/librosRutas');
const errorHandler = require('./Middleware/errorHandler');
app.use('/libros', libroRoutes);
app.use(errorHandler);

const puerto = 3000;


app.listen(3000, ()=> {
    console.log('Servidor en funcionamiento en el puerto 3000')
})