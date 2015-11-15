/**
 * Created by Hp on 10/10/2015.
 */
$(document).ready(function(){
  $(".sidebar").slideToggle('fast');
  window.onresize=function(event){
    if($(window).width()>320){
      $(".sidebar").show();
    }
  };
});
