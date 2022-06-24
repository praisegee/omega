$(function() {
    $('i#next-btn').on('click', function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next('.slide-img');

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', '-10').fadeIn(1000);
            nextImg.addClass('active').css('z-index', '10').fadeIn(1000);
        } else {
            currentImg = $('img.slide-img:first')
        }
    });

    $('i#prev-btn').on('click', function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev('.slide-img');

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', '-10').fadeIn(1000);
            prevImg.addClass('active').css('z-index', '10');
        } else {
            currentImg = $('img.slide-img:last')
        }
    });
});