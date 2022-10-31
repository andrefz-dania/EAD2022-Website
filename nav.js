const primaryNav = document.querySelector('.navbar-overlay-mobile');
const navToggle = document.querySelector('.overlay-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
    }
    else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
    }
    }
);