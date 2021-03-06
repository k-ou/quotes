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
            updateSection(direction);
            break;
        case esc:
            closeModal(e);
            break;
    }
});

$(window).bind('mousewheel', (event, delta) => {
    const name = $('.open .name');
    if (name && name.is('h3')) {
        const nameBottom = name.offset().top + name.height();
        const quoteTop = $('.open .quote').offset().top;
        const bio = $('.open .bio');
        const bioBottom = bio.offset().top + bio.outerHeight();
        if (bioBottom < nameBottom) {
            name.css('color', 'rgba(255,255,255,0)');
        } else if (quoteTop < nameBottom) {
            name.css('color', 'rgba(255,255,255,0.5)');
        } else {
            name.css('color', 'rgba(255,255,255,1.0)');
        }
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
    $('.container-fluid').css('overflow', 'hidden');
    styleModal();
}

function closeModal(e) {
    $('.container-fluid').css('overflow', 'visible');
    e && e.stopPropagation();
    const name = $('.open .name');
    name.removeClass('overlappingName')
    unstyleModal();
    $('.open').find('.overlay').removeClass('show_overlay');
    $('.open').find('.profile_background').removeClass('quote_expand');
    $('.open').removeClass('open');
}
