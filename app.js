//Requires
var express=require('express');
var mongoose=require('mongoose');

//Iniicializar variables este es el servidor express
var app=express();

//Importamos rutas
var appRutas=require('./rutas/app');
var usuariosRutas=require('./rutas/usuario')
//Conexion a la base de datos
mongoose.connect('mongodb://campitos:campitos@ds053728.mlab.com:53728/jc-elementos',(err,res)=>{
    if(err)throw err;
    console.log('Base de datos \x1b[32m%s\x1b[0m',' online')
})

//Rutas
app.use('/usuario',usuariosRutas);
app.use('/',appRutas);

//Ajustamos el puerto
app.listen(3000,()=>{
    console.log('Express server en el puerto 3000: \x1b[32m%s\x1b[0m',' online');
})
