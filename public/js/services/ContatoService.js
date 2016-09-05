// public/js/services/ContatoService.js

angular.module('contatoojs').factory('Contato', function($resource){
    return $resource('/contatos/:id');
});