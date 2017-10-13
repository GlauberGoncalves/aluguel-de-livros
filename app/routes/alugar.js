module.exports = function(application){

/* chama controller busca email */
application.get('/admin/alugar', function(req, res){
  console.log('--> Rota alugar chamada');
  application.app.controllers.aluguel.alugar(application, req, res);
});

/* chama controller busca email */
application.post('/admin/emails', function(req, res){
  console.log('--> Rota de busca de email');
  application.app.controllers.aluguel.buscaEmail(application, req, res);
});

application.post('/admin/livros', function(req, res){
  console.log('--> Rota de busca livros');
  application.app.controllers.aluguel.buscaLivro(application, req, res);
});


};
