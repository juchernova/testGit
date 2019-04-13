$(document).ready(function(){
  $('.slider').bxSlider({
    // slideWidth: 900,
    auto: true,
    autoStart: true,
    autoDirection: 'next',
    autoHover: true,
    speed: 1500,
    infiniteLoop: true,
    touchEnabled: true,
    nextText: '<img src="img/next.png">',
   prevText: '<img src="img/prev.png">'
  });
});

$(document).ready(function(){
  $('.slider-firm').bxSlider({
    mode: 'vertical',
    slideWidth: 190,
    adaptiveHeight: true,
    auto: true,
    autoStart: true,
    autoDirection: 'next',
    autoHover: true,
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 1,
    speed: 1500,
    touchEnabled: true,
    infiniteLoop: true

  });
});

if ( !window.matchMedia('(max-width: 1264px)').matches) {
  console.log(`мы заходим если больше 900`);
  $(document).ready(function(){
    $('.slider-new').bxSlider({
      slideWidth: 195,
      autoDirection: 'next',
      speed: 1500,
      infiniteLoop: true,
      touchEnabled: true,
      nextText: '<img src="img/next.png">',
     prevText: '<img src="img/prev.png">',
     slideMargin: 15,
     
     maxSlides: 3,
     moveSlides: 1,
     controls: true,
     pager: false,
     
    });
  });
  
  $(document).ready(function(){
    $('.slider-stock').bxSlider({
      slideWidth: 195,
      autoDirection: 'next',
      speed: 1500,
      infiniteLoop: true,
      touchEnabled: true,
      nextText: '<img src="img/next.png">',
     prevText: '<img src="img/prev.png">',
     slideMargin: 15,
     
     maxSlides: 3,
     moveSlides: 1,
     controls: true,
     pager: false,
     
    });
  });
}
 else {
  $(document).ready(function(){
    console.log(`мы заходим если меньше 900`);
    $('.slider-new').bxSlider({
      slideWidth: 195,
      autoDirection: 'next',
      speed: 1500,
      infiniteLoop: true,
      touchEnabled: true,
      nextText: '<img src="img/next.png">',
     prevText: '<img src="img/prev.png">',
     slideMargin: 15,
  
     maxSlides: 1,
     moveSlides: 1,
     controls: true,
     pager: false,
     
    });
  });
  
  $(document).ready(function(){
    $('.slider-stock').bxSlider({
      slideWidth: 195,
      autoDirection: 'next',
      speed: 1500,
      infiniteLoop: true,
      touchEnabled: true,
      nextText: '<img src="img/next.png">',
     prevText: '<img src="img/prev.png">',
     slideMargin: 15,
     
     maxSlides: 1,
     moveSlides: 1,
     controls: true,
     pager: false,
     
    });
  });
}



$(document).ready(function(){
  $('.date').mask('00/00/0000');
  $('.time').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.phone').mask('0000-0000');
  $('.phone_with_ddd').mask('(00) 0000-0000');
  $('.phone_us').mask('(000) 000-00-00');
  $('.mixed').mask('AAA 000-S0S');
  $('.cpf').mask('000.000.000-00', {reverse: true});
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  $('.money').mask('000.000.000.000.000,00', {reverse: true});
  $('.money2').mask("#.##0,00", {reverse: true});
  $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });

 
});
 var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/;
		$('#email').keyup(function(){
			!pattern.test($('#email').val())? $('#email').css('border-color' , 'rgb(255, 0, 0)') : $('#email').css('border-color', '#007d7c');
		});

// слайдер услуги


if ( !window.matchMedia('(max-width: 1190px)').matches) {
  console.log(`мы заходим если больше 1190`);
  $(document).ready(function(){
    $('.services-slider').bxSlider({
      slideWidth: 201,
      autoDirection: 'next',
      speed: 1500,
      infiniteLoop: true,
      touchEnabled: true,
      nextText: '<img src="img/next.png">',
     prevText: '<img src="img/prev.png">',
     slideMargin: 91,
     maxSlides: 4,
     moveSlides: 1,
     controls: true,
     pager: false,
     
    });
  });
}

else if ( !window.matchMedia('(max-width: 700px)').matches) {
  console.log(`мы заходим если больше 700`);
  $(document).ready(function(){
    $('.services-slider').bxSlider({
      slideWidth: 201,
      autoDirection: 'next',
      speed: 1500,
      infiniteLoop: true,
      touchEnabled: true,
      nextText: '<img src="img/next.png">',
     prevText: '<img src="img/prev.png">',
     slideMargin: 91,
     maxSlides: 2,
     moveSlides: 1,
     controls: true,
     pager: false,
     
    });
  });
}

  else {
    $(document).ready(function(){
      console.log(`мы заходим если меньше 700`);
      $('.services-slider').bxSlider({
        slideWidth: 201,
        autoDirection: 'next',
        speed: 1500,
        infiniteLoop: true,
        touchEnabled: true,
        nextText: '<img src="img/next.png">',
       prevText: '<img src="img/prev.png">',
       slideMargin: 91,
       maxSlides: 1,
       moveSlides: 1,
       controls: true,
       pager: false,
       
      });
    }); 
  }   


  jQuery(function($){
    $('a[href*="#"]').on('click.smoothscroll', function( e ){
    var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
    if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
    var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
    if( ! $target.length ) return;
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 900, 'swing', function(){
    window.location.hash = hash;
    });
    });
    });
   

    $(function() {
      $(document).on('mouseenter.collapse', '[data-toggle=collapse]', function(e) {
          var $this = $(this),
              href, 
              target = $this.attr('data-target') 
                       || e.preventDefault() 
                       || (href = $this.attr('href')) 
                       && href.replace(/.*(?=#[^\s]+$)/, ''), //strip for ie7
              option = $(target).hasClass('in') ? 'hide' : "show"
               
              $('.panel-collapse').not(target).collapse("hide")
              $(target).collapse(option);
              
      })
  });



  $('.upd').focus(function(){$('.updates').show();})
          .blur(function(){$('.updates').hide();});
          

  $('.recom').focus(function(){$('.recommend').show();})
          .blur(function(){$('.recommend').hide();});
  
   $('.artic').focus(function(){$('.article').show();})
          .blur(function(){$('.article').hide();});


// сдайдер категории

$(document).ready(function(){
  $('.slider-catprov').bxSlider({
    slideWidth: 120,
    autoDirection: 'next',
    speed: 1500,
    infiniteLoop: true,
    touchEnabled: true,
    nextText: '<img src="img/next.png">',
   prevText: '<img src="img/prev.png">',
   slideMargin: 10,
   
   maxSlides: 5,
   moveSlides: 1,
   controls: true,
   pager: false
   
  });
});

$(document).ready(function(){
  $('.slidernew').bxSlider({
    mode: 'vertical',
    slideWidth: 150,
    controls: true,
    nextText: '<img src="img/next.png">',
    prevText: '<img src="img/prev.png">',
    adaptiveHeight: true,
    auto: true,
    autoStart: true,
    autoDirection: 'next',
    autoHover: true,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    speed: 1500,
    touchEnabled: true,
    infiniteLoop: true,
    slideMargin: 15,
    pager: false

  });
});


$(document).ready(function(){
  $('.sliderstock').bxSlider({
    mode: 'vertical',
    slideWidth: 150,
    controls: true,
    nextText: '<img src="img/next.png">',
    prevText: '<img src="img/prev.png">',
    adaptiveHeight: true,
    auto: true,
    autoStart: true,
    autoDirection: 'next',
    autoHover: true,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    speed: 1500,
    slideMargin: 15,
    touchEnabled: true,
    infiniteLoop: true,
    pager: false

  });
});


// карточка товара (описание и характеристики)

$('.specific-descr').focus(function(){$('.spec-descr').show();})
.blur(function(){$('.spec-descr').hide();});


$('.specific-spec').focus(function(){$('.spec-spec').show();})
.blur(function(){$('.spec-spec').hide();});