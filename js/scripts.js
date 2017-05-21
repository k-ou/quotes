jQuery(document).ready(function ($) {
    //trigger the animation - open modal window
    $('section').on('click', function () {
        $(this).css('z-index', 100);
        $(this).css('position', 'fixed');
        $(this).css('width', '100vw');
        $(this).css('height', '100vh');
        $(this).css('top', 0);
        $(this).css('left', 0);
        $(this).find('.quote_container').css('height', '100vh');
        $(this).find('.overlay').css('opacity', 1);
        $(this).find('.overlay').css('position', 'fixed');
        $(this).find('.overlay').css('z-index', '101');
    })
});
