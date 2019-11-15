//画面トップへスクロール
$(document).on('turbolinks:load', function(){
  let topBtn = $('#btn');
  topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
  });
});



//各セクションへスクロール
$(function(){
  $('a[href^=#]').click(function(){
    let adjust = 0;
    let speed = 300;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});



//タイトルのフェード
$(function(){
  $('#title').addClass('fade_in_up');
})