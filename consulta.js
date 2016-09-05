var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

 var _idProcurado = new ObjectID('57c5d28789c8b5140b454a95');

 MongoClient.connect('mongodb://localhost:27017/contatoojs', function(erro, db){
     if(erro) throw err;
     db.collection('contatos').findOne({_id : _idProcurado},
     function(erro, contato){
         if(erro) throw err;
         console.log(contato);
     });
 });