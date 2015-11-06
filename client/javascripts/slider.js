$(function(){
  let sliderChange = function(e) {
    e.preventDefault();
    let slides = $(e.target).closest('.posts-slider').find('.slides');
    let value = $(e.target).val();
    let articles = slides.find('article');
    let body_width = $('body').width();
    let cont_width = $('.container').width();
    let width = (articles.width()) * articles.size() - (body_width - cont_width);
    console.log(value + ': ' + body_width + ', ' + width);
    slides.css('left', -width/100*value);
  };
  document.getElementById('slider_control').onchange = sliderChange;
  document.getElementById('slider_control').oninput = sliderChange;

});
