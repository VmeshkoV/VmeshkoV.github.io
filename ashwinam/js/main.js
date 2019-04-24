$( document ).ready(function() {
    console.log( "ready!" );
});

function getPage(el) {
  if(el.id === 'about'){
    $('.header-menu-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.about').show();
  } else if(el.id === 'main'){
    $('.header-menu-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.slider-wrap, .main, .partners').show();
  } else if(el.id === 'schedule'){
    $('.header-menu-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.schedule').show();
  } else if(el.id === 'ayurveda'){
    $('.header-menu-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.ayurveda').show();
  }
};
