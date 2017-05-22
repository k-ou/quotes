$(document).ready(() => {
    // open modal
    $('section').on('click', openModal);
    $('.close').on('click', closeModal);
});

$(document).keyup(e => {
    const ESC = 27;
    if (e.keyCode === ESC) {
        closeModal();
    }
});

function styleModal() {
    $('.open').find('.container_effects3').addClass('modal_effect');
}

function unstyleModal() {
    $('.open').find('.container_effects3').removeClass('modal_effect');
}

function openModal() {
    $(this).addClass('open');
    $(this).find('.overlay').css('opacity', 1);
    $(this).find('.profile_background').addClass('quote_expand');
    styleModal();
}

function closeModal() {
    unstyleModal();
    $('.open').find('.overlay').css('opacity', 0);
    $('.open').find('.profile_background').removeClass('quote_expand');
    $('.open').removeClass('open');
}
