$(document).ready(function () {

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
                if (scroll >= 100) {
                    $('body').addClass('shadow')
                } else {

                    $('body').removeClass('shadow')
                }
        });
    });
    
    
    $('.top_close').click(function(){
        $(this).parent().hide();
    })

    $('.mobil_search_icon').click(function(){
        $('.Serach_bar').slideToggle();
    });

     $('.menu-toggle').click(function(){
        $('body').toggleClass('open');
    });

    if ($(window).width() < 992) {
        $('.menu ul li a').click(function() {
            $('body').removeClass('open');
        })
    }
   
    
});