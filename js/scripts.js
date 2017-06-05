$(document).ready(() => {
    $('section').on('click', openModal);
    $('.close').on('click', closeModal);
});

$(document).keyup(e => {
    const esc = 27;
    const left = 37;
    const right = 39;
    switch (e.keyCode) {
        case left:
        case right:
            const direction = e.keyCode === left ? 'prev' : 'next';
            break;
        case esc:
            closeModal(e);
            break;
    }
});

function updateSection(direction) {
    const nextSection = $('.open').parent()[direction]().children();
    closeModal.bind($('.open'))()
    if (nextSection.is('section')) {
        openModal.bind(nextSection)();
    }
}

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

function closeModal(e) {
    e && e.stopPropagation();
    unstyleModal();
    $('.open').find('.overlay').removeClass('show_overlay');
    $('.open').find('.profile_background').removeClass('quote_expand');
    $('.open').removeClass('open');
    $('body').css('overflow', 'visible');
}
