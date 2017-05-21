$(document).ready(() =>{
    // open modal
    $('section').on('click', openModal);
});

$(document).keyup(e => {
    const ESC = 27;
    if (e.keyCode === ESC) {
        closeModal();
    }
});

function openModal() {
    $(this).addClass('open');
    $(this).find('.overlay').css('opacity', 1);
    $(this).find('.quote_container').css('height', '100vh');
}

function closeModal() {
    $('.open').find('.overlay').css('opacity', 0);
    $('.open').find('.quote_container').css('height', '400px');
    $('.open').removeClass('open');
}
