module.exports = function(application){

	/* chama controller com formulario de cadastro do livro */
	application.get('/', function(req, res){
		application.app.controllers.index.redireciona(application, req, res);
	});

};
