$(function(){
  
  $('.load').click(function(){
    
    var pagina = $(this).attr('data-link');
    $('.modulo').html('<center><img src="img/wait.gif"></center>');
    
    setTimeout(function(){      
      $('.modulo').load(pagina);
      setTimeout(function(){
        $('.carregar').fadeIn(200);
      }, 500)
    }, 1500);
    
  });
});
  

//seleciona a aba baseando-se na URL atual carregada com a ID
  
$(function(){
  
  var url = document.location.toString();
  var segment = url.split('#')[1];
  $('.modulo').load('sections/'+segment+'.php');  
  setTimeout(function(){
    $('.carregar').fadeIn(200);
  }, 500);
  
});