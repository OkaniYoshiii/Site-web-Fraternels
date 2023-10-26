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
<<<<<<< Updated upstream
})

// Page transitions

if (hasEnableAnimations === "false") document.querySelector(':root').classList.remove('js-active');

const BODY = document.body;
const ANCHOR_TAGS = document.querySelectorAll('a:not([target="_blank"])');

ANCHOR_TAGS.forEach((ANCHOR_TAG) => {ANCHOR_TAG.addEventListener('click', transitionToNextPage)});

function transitionToNextPage(ev) {
    if (hasEnableAnimations === "false") return;
    document.documentElement.classList.add('js-active');
    const HREF = ev.currentTarget.href;
    if(window.location.href == HREF) return;
    ev.preventDefault();
    BODY.classList.add('leave-page');
    setTimeout(() => {
        window.location.href = HREF;
    }, 800);
}
=======
})
>>>>>>> Stashed changes
