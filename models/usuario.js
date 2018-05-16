var mongoose=require('mongoose');
var Schema=mongoose.Schema;
   
var usuarioSchema=new Schema({
    nombre:{type:String, requires:[true, 'El nombre es necesario']},
    email:{type:String, unique:true, required:[true, 'El correo es necesairo']},
    password:{type:String, required:[true, 'El password rs necesario']},
    img:{type:String, required:false},
    role:{type:String, required:true, default:'USER_ROLE'}
});
module.exports=mongoose.model('Usuario',usuarioSchema);