function UsuariosDAO(connection){
	this._connection = connection;
}

UsuariosDAO.prototype.getUsuarios = function(callback){
	this._connection.query('select * from usuarios order by data_entrada desc', callback);
};

UsuariosDAO.prototype.getUsuario = function(id_usuario, callback){
	console.log(id_usuario.id_usuario);
	this._connection.query('select * from usuario where id_usuario = ' + id_usuario.id_usuario, callback);
};

UsuariosDAO.prototype.cadastraUruarios = function(usuario, callback){
	this._connection.query('insert into usuarios set ? ', usuario, callback);
};

UsuariosDAO.prototype.get10UltimosUsuarios = function(callback){
	this._connection.query('select * from livros order by data_entrada desc limit 10', callback);
};

UsuariosDAO.prototype.excluiUsuario = function(id_usuario, callback){
	this._connection.query('delete from usuarios where id_usuario = ' + id_usuario ,  callback);
};

UsuariosDAO.prototype.buscaEmail = function(email, callback){
	console.log('--> Model buscaEmail chamado');
	var sql = "select email from usuarios where email like '%" + email + "%' limit 5";
	this._connection.query(sql ,  callback);
};

module.exports = function(){
	return UsuariosDAO;
};
