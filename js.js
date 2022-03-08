$(document).on('click', '#button', function(){
  let txt = 'Hello';
  $.ajax({
    url: 'func.php',
    type: 'POST',
    data: txt,
    success: function(data){
     $('p.out').text(data);
   },
    error: function(){
	console.log('ERROR');
    }
 })
})