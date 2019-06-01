const express = require('express'); 
const cors = require('cors'); 
const app = express(); 
 
app.set('port', process.env.PORT || 5000); 
 
app.use(express.urlencoded({extended: false})); 
app.use(express.json()); app.use(cors()); 
 
app.use('/api-cognos/usuarios', require('./rutas/usuarios-rutas')); 
 
app.listen(app.get('port'), () => {     
    console.log(`Server escuchando en el puerto ${app.get('port')}`); });