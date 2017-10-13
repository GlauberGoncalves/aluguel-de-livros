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

/* >>>> exclui usuario no banco de dados via ajax */
  $("#email").keyup(function(){
    console.log('--> função do email acionada!');
    var formEmail = $(this).val();
      $.post("/admin/emails",
      {
          email: formEmail
      },
      function(data, status){
        while(emails.length){
          emails.pop();
        }

        for(var i = 0; i < data.length; i++){
          emails.push(data[i].email);
        }
      });
   });
  /* <<<< exclui livro no banco de dados via ajax */

    var emails = [
      "sem resultados"
    ];

    $( "#email" ).autocomplete({
      source: emails
    });


    /* >>>> exclui usuario no banco de dados via ajax */

    var livros = [
      "Sem resultados"
    ];

      $("#livro").keyup(function(){
        console.log('--> função do email acionada!');
        var formLivro = $(this).val();
          $.post("/admin/livros",
          {
              titulo: formLivro
          },
          function(data, status){
            while(livros.length){
              livros.pop();
            }

            for(var i = 0; i < data.length; i++){
              livros.push(data[i].titulo);
            }
          });
       });
      /* <<<< exclui livro no banco de dados via ajax */



        $( "#livro" ).autocomplete({
          source: livros
        });

});
