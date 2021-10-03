$('.about-item > div').on('click', function () {
    $(this).children('img').toggleClass('rotateNew');
    $(this).children('.about-position').toggleClass('toggleColorNew');
    $(this).parent('.about-item').toggleClass('toggleColorBorder'); 
    $(this).next('p').slideToggle(300);
    
})