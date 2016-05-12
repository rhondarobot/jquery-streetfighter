
$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  $('.hulk-ryu').mouseenter(function() {
    $('.hulk-ryu-still').hide();
    $('.hulk-ryu-ready').show();
  })
  .mouseleave(function(){
  	$('.ryu-ready').hide();
  	$('.ryu-still').show();
  })
  .mouseleave(function(){
    $('.hulk-ryu-ready').hide();
    $('.hulk-ryu-still').show();
  })
  .mousedown(function() {
  	playHadouken();
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').finish().show().animate(
  		{'left':'1020px'},
  		500,
  		function() {
  			$(this).hide();
  			$(this).css('left','520px');
  		}
  		); 
  })  
  .mousedown(function() {
    playHadouken();
    $('.hulk-ryu-ready').hide();
    $('.hulk-ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'right':'1020px'},
      500,
      function() {
        $(this).hide();
        $(this).css('right','520px');
      }
      );
  })
  .mouseup(function() {
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  })
  .mouseup(function() {
    $('.hulk-ryu-throwing').hide();
    $('.hulk-ryu-ready').show();
  })
  $("body").keydown(function(x) {
       if(x.keyCode==88){
         $('.ryu-still').hide();
         $('.ryu-ready').hide();
         $('.ryu-cool').show();
       }
  })
 $('.hulk-ryu').mouseenter(function() {
    $('.hulk-ryu-still').hide();
    $('.hulk-ryu-ready').show();
  })
});

function playHadouken () {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}


