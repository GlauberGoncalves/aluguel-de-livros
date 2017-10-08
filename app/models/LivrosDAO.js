function LivrosDAO(connection){
	this._connection = connection;
}

/* funcionando */
LivrosDAO.prototype.getLivros = function(callback){
	this._connection.query('select * from livros order by data_criacao desc', callback);
};

/* ainda não testado */
LivrosDAO.prototype.getLivro = function(id_livro, callback){
	console.log(id_livro.id_livro);
	this._connection.query('select * from livros where id_livro = ' + id_livro.id_livro, callback);
};

/* funcionando */
LivrosDAO.prototype.salvarLivro = function(livro, callback){
	this._connection.query('insert into livros set ? ', livro, callback);
};

/* funcionando */
LivrosDAO.prototype.get10UltimosLivros = function(callback){
	this._connection.query('select * from livros order by data_entrada desc limit 10', callback);
};

LivrosDAO.prototype.excluirLivro = function(id_livro, callback){
	this._connection.query('delete from livros where id_livro = ' + id_livro ,  callback);
};

module.exports = function(){
	return LivrosDAO;
};
