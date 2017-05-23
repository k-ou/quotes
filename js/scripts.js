$(document).ready(() => {
    // open modal
    var section = $('section');
    var isOpen = section.hasClass('open');
    if (!isOpen) {
        section.on('click', openModal);
        debugger;
    }
    $('.close').on('click', closeModal);
});

$(document).keyup(e => {
    const ESC = 27;
    const left = 37;
    const right = 39;
    if (e.keyCode === ESC) {
        closeModal();
    } else if (e.keyCode === left) {
        closeModal();
    } else if (e.keyCode === right) {
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
    $(this).find('.overlay').addClass('show_overlay');
    $(this).find('.profile_background').addClass('quote_expand');
    $('body').css('overflow', 'hidden');
    styleModal();
}

function closeModal() {
    debugger;
    unstyleModal();
    $('.open').find('.overlay').removeClass('show_overlay');
    $('.open').find('.profile_background').removeClass('quote_expand');
    $('.open').removeClass('open');
    $('body').css('overflow', 'visible');
}
