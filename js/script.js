$(function(){
  var btn = $("#upbtn");
  $(window).scroll(function(){
    $(this).scrollTop() < 400 ? btn.hide() : btn.show();  
  });  
  btn.click(function(){
    $("html,body").animate({scrollTop:0},600);
  });
});