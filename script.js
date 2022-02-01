$(function() {
    $('#bars').click(
    function(){
      if($('#slide').hasClass('opned')){
        $('#slide').animate({'marginRight':'0px'},500);
        $('#slide').removeClass('opned');
      }else{
        $('#slide').animate({'marginRight':'180px'},500);
        $('#slide').addClass('opned');
      }
      }
  );
});