
/*******************
*
* AlugarCtrl
*
********************/
module.exports.alugar = function(application, req, res){
  console.log('--> controler alugar chamado');
	res.render("adm/alugar");
};

/*******************
*
* Busca de emails ajax
*
********************/
module.exports.buscaEmail = function(application, req, res){
  console.log('--> Controller buscaEmail chamado');
  var dados = req.body;
  console.log('--> formulario: '+ dados.email);
  /* >>>>> connection com db */

	var connection = application.config.dbConnection();
	var usuariosModel = new application.app.models.UsuariosDAO(connection);


	usuariosModel.buscaEmail( dados.email, function(error, result){
    console.log(result);
    res.send(result);
	});


};

/*******************
*
* Busca de emails ajax
*
********************/
module.exports.buscaLivro = function(application, req, res){
  console.log('--> Controller buscaLivro chamado');
  var dados = req.body;
  console.log('--> formulario: '+ dados.titulo);
  /* >>>>> connection com db */

	var connection = application.config.dbConnection();
	var livrosModel = new application.app.models.LivrosDAO(connection);


	livrosModel.buscaLivro( dados.titulo, function(error, result){
    console.log(result);
    res.send(result);
	});


};
