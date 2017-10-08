$(document).ready(function(){

/*
*
*   excluir livro via Ajax
*
*/
  /* >>>> exclui livro no banco de dados via ajax */
  $(".excluirLivro").click(function(){
    var id = $(this).val();
      $.post("/admin/excluir",
      {
          id_livro: id
      },
      function(data, status){
          /* se item for excluido
           *  retira linha excluida
           * da tabela
           */
          if(data == 'sim'){
            var tr = '#'+id.toString();
            $(tr).hide(1000);
          }
      });
   });
  /* <<<< exclui livro no banco de dados via ajax */

  /*
  *
  *   excluir Usuario via Ajax
  *
  */
  /* >>>> exclui usuario no banco de dados via ajax */
  $(".excluirUsuario").click(function(){
    var id = $(this).val();
      $.post("/admin/exclui_usuario",
      {
          id_usuario: id
      },
      function(data, status){
          /* se item for excluido
           *  retira linha excluida
           * da tabela
           */
          if(data == 'sim'){
            var tr = '#'+id.toString();
            $(tr).hide(1000);
          }
      });
   });
  /* <<<< exclui livro no banco de dados via ajax */

});
