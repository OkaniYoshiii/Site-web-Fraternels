// Hamburger menu

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