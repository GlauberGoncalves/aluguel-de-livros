/*
*
*@autor: Glauber Gonçalves
*@version: 1.0.0
*
*/

/*******************
*
* home
*
********************/
module.exports.home = function(application, req, res){
	res.render("adm/home");
};

/*******************
*
* formulario de cadastro de novo livro
*
********************/
module.exports.formulario_cadastro = function(application, req, res){
	res.render("adm/cadastra",
	{
		validacao:{}
	});
};

/*******************
*
* consulta livros
*
********************/
module.exports.consulta_livros = function(application, req, res){

	var connection = application.config.dbConnection();
	var livrosModel = new application.app.models.LivrosDAO(connection);

	livrosModel.get10UltimosLivros(function(error, result){

			res.render("adm/consulta",{
				livros: result
			});
	});
};

/*******************
*
* salvar livro
*
********************/
module.exports.salvar = function(application, req, res){
	/* recebendo dados do formulario */
	var livro = req.body;

	/* trata possiveis erros do formulário */
	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('descricao','Descricao é obrigatório').notEmpty();
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('categoria','Categoria é obrigatorio').notEmpty();

	/* guarda erros na variavel erros */
	var erros = req.validationErrors();

	/* Se houver erros envia notificação dos erros ao usuário */
	if(erros){

		res.render("adm/cadastra",
		 {
			validacao : erros
			}
		);
		return;
	}


	/* >>>>> connection com db */

	var connection = application.config.dbConnection();
	var livrosModel = new application.app.models.LivrosDAO(connection);



	livrosModel.salvarLivro( livro, function(error, result){

		if(!error){
			res.redirect("/admin/consultar");
		}else{
			console.log('--> é... deu erro na hora de salvar no banco de dados. Segue os erros');
			console.log(error);
		}
	});
  /* <<<<<  connection com db*/
};

/*******************
*
* Exclui livro
*
********************/
module.exports.excluirLivro = function(application, req, res){
	var livro = req.body;

	var connection = application.config.dbConnection();
	var livrosModel = new application.app.models.LivrosDAO(connection);

	livrosModel.excluirLivro(livro.id_livro, function(error, result){
		if(!error){
			console.log('--> livro excluido');
			res.send('sim');
		}else{
			console.log(error);
			res.send(error);
		}
	});


};

/*******************
*
* AlugarCtrl
*
********************/
module.exports.alugar = function(application, req, res){
	res.render("adm/alugar");
};


/*******************
*
* ConfiguracoesCtrl
*
********************/
module.exports.configuracoes = function(application, req, res){
	res.render("adm/configuracoes");
};

/*******************
*
* Cadastro de usuarios
*
********************/
module.exports.cadastrar_usuario = function(application, req, res){
	console.log('Entrou no cadastro de usuarios');
	res.render("adm/cadastra_usuario",{
		validacao:{}
	});
};

/*******************
*
* salva cadastro usuario
*
********************/
module.exports.salvar_usuario = function(application, req, res){
	/* recebendo dados do formulario */
	var usuario = req.body;

	/* trata possiveis erros do formulário */
	req.assert('nome','Nome é obrigatório').notEmpty();
	req.assert('sobrenome','Sobrenome é obrigatório').notEmpty();
	req.assert('email','Email é obrigatório').notEmpty();
	req.assert('senha','Senha é obrigatoria').notEmpty();

	/* guarda erros na variavel erros */
	var erros = req.validationErrors();

	/* Se houver erros envia notificação dos erros ao usuário */
	if(erros){

		res.render("adm/cadastra_usuario",
		 {
			validacao : erros
			}
		);
		return;
	}


	/* >>>>>> connection com db */

	var connection = application.config.dbConnection();
	var usuariosModel = new application.app.models.UsuariosDAO(connection);



	usuariosModel.cadastraUruarios( usuario, function(error, result){

		if(!error){
			res.redirect("/admin/consultar_usuarios");
		}else{
			console.log('--> é... deu erro na hora de salvar no banco de dados. Segue os erros');
			console.log(error);
		}
	});

  /* <<<<<<  connection com db*/
};

/*******************
*
* consulta Usuarios
*
********************/
module.exports.consultar_usuarios = function(application, req, res){
	console.log('--> controller consulta usuario chamado');
	var connection = application.config.dbConnection();
	var usuariosModel = new application.app.models.UsuariosDAO(connection);

	usuariosModel.getUsuarios(function(error, result){
		console.log('--> model getUsuarios chamado');

			res.render("adm/consulta_usuarios",{
				usuarios: result
			});
	});
};

/*******************
*
* Exclui Usuario
*
********************/
module.exports.exclui_usuario = function(application, req, res){
	console.log('--> Controller excluir usuario chamado');
	var usuario = req.body;
	console.log('--> Formulario recebido');
	var connection = application.config.dbConnection();
	console.log('--> conexao feita com banco');
	var usuariosModel = new application.app.models.UsuariosDAO(connection);
	console.log('--> classe usuarios instanciada');

	usuariosModel.excluiUsuario(usuario.id_usuario, function(error, result){
		console.log('--> Model excluir usuario chamado');
		if(!error){
			console.log('--> usuario excluido');
			res.send('sim');
		}else{
			console.log('usuario não excluido');
			res.send(error);
		}
	});
};
