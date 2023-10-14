const HAMBURGER_MENU = document.querySelector('.header-links button');
const HAMBURGER_CONTENT = document.querySelector('.header-links ul');

HAMBURGER_MENU.addEventListener('click', function() {
    const IS_EXPANDED = HAMBURGER_CONTENT.getAttribute("aria-expanded");
    if(IS_EXPANDED === "true") {
        HAMBURGER_CONTENT.setAttribute("aria-expanded", "false");
        HAMBURGER_MENU.setAttribute("data-expanded","false");
        return;
    }
    if(IS_EXPANDED === "false") {
        HAMBURGER_CONTENT.setAttribute("aria-expanded", "true");
        HAMBURGER_MENU.setAttribute("data-expanded","true");
        return;
    }
})

const ANCHOR_TAGS = document.querySelectorAll('a');
const HTML = document.documentElement;

ANCHOR_TAGS.forEach((ANCHOR_TAG) => {ANCHOR_TAG.addEventListener('click', transitionToNextPage)});

function transitionToNextPage(ev) {
    const HREF = ev.currentTarget.href;
    if(window.location.href == HREF) return;
    ev.preventDefault();
    HTML.classList.add('leave-page');
    setTimeout(() => {
        window.location.href = HREF;
    }, 800);
}