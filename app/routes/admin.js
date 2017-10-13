module.exports = function(application){

	/* chama controller com formulario de cadastro do livro */
	application.get('/admin/', function(req, res){
		application.app.controllers.admin.home(application, req, res);
	});

	/* chama controller com formulario de cadastro do livro */
	application.get('/admin/home', function(req, res){
		application.app.controllers.admin.home(application, req, res);
	});

	/* chama controller com formulario de cadastro do livro */
	application.get('/admin/consultar', function(req, res){
		console.log('--> Chamando controller consulta_livros');
		application.app.controllers.admin.consulta_livros(application, req, res);
	});

	/* chama controller com formulario de cadastro do livro */
	application.get('/admin/cadastrar', function(req, res){
		application.app.controllers.admin.formulario_cadastro(application, req, res);
	});

	/* chama controller para salvar livro */
	application.post('/admin/salvar', function(req, res){
		application.app.controllers.admin.salvar(application, req, res);
	});

	/* chama controller configuracoes */
	application.post('/admin/excluir', function(req, res){
		application.app.controllers.admin.excluirLivro(application, req, res);
	});

	/* chama controller configuracoes */
	application.get('/admin/configuracoes', function(req, res){
		application.app.controllers.admin.configuracoes(application, req, res);
	});

	/*
	/****** Referente aos usuarios do sistema *******/
	/*

	/* chama controller cadastro de usuarios */
	application.get('/admin/cadastrar_usuario', function(req, res){
		application.app.controllers.admin.cadastrar_usuario(application, req, res);
	});

	/* chama controller para salvar usuario */
	application.post('/admin/salvar_usuario', function(req, res){
		application.app.controllers.admin.salvar_usuario(application, req, res);
	});


	/* chama controller cadastro de usuarios */
	application.get('/admin/consultar_usuarios', function(req, res){
		console.log('--> rota consulta usuario chamado');
		application.app.controllers.admin.consultar_usuarios(application, req, res);
	});

	/* chama controller cadastro de usuarios */
	application.post('/admin/exclui_usuario', function(req, res){
		console.log('--> Rota excluir usuario chamado');
		application.app.controllers.admin.exclui_usuario(application, req, res);
	});



};
