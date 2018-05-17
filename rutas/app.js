//Rutas

var express=require('express');
var app=express();
app.get('/',(req,res,next)=>{
    res.status(200).json({
        ok:true,
        mensaje:'Peticion realizadaasas corrrectamente para el servidor'
    });
});

module.exports=app;
