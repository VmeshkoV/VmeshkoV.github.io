

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
  } else if(el.id === 'yoga'){
    $('.header-menu-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.yoga').show();
  } else if(el.id === 'passage'){
    $('.header-menu-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.passage').show();
  } else if(el.id === 'contacts'){
    $('.header-menu-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.contacts').show();
  }
};




function getPageMin(el) {
  if(el.id === 'about-min'){
    $('.menu-min-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.about').show();
  } else if(el.id === 'main-Mind'){
    $('.menu-min-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.slider-wrap, .main, .partners').show();
  } else if(el.id === 'schedule-min'){
    $('.menu-min-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.schedule').show();
  } else if(el.id === 'ayurveda-min'){
    $('.menu-min-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.ayurveda').show();
  } else if(el.id === 'yoga-min'){
    $('.menu-min-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.yoga').show();
  } else if(el.id === 'passage-min'){
    $('.menu-min-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.passage').show();
  } else if(el.id === 'contacts-min'){
    $('.menu-min-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.contacts').show();
  } else if(el.id === 'main-min'){
    $('.menu-min-link').removeClass('active');
    $(el).addClass('active');
    $('section').hide();
    $('.slider-wrap, .main, .partners').show();
  }
};


// Открыть и закрыть меню
$(document).ready(function(){
  $( ".bars-btn" ).click(function() {
    $( ".menu-min-wrap" ).toggle( "slow", function() {
      // Animation complete.
    });
  });
});


// Кнопка наверх
$(document).ready(function(){
    $('#button-up, .header-menu-link, .menu-min-link').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});
