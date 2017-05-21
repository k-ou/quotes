jQuery(document).ready(function ($) {
    // open modal
    $('section').on('click', function () {
        $(this).addClass('open');
        $(this).find('.overlay').css('opacity', 1);
        $(this).find('.quote_container').css('height', '100vh');
    })
});
