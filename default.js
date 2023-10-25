// Website Parameters

const DIALOG = document.querySelector("dialog");
const OPEN_BUTTON = document.querySelector("#dialog-open");
const CLOSE_BUTTON = document.querySelector("#dialog-close");

const ANIMS_ENABLED_BUTTON = document.getElementById('anims-enabled');
const ANIMS_DISABLED_BUTTON = document.getElementById('anims-disabled');

let hasEnableAnimations = (localStorage.length === 0) ? "true" : localStorage.getItem("animationsEnabled");

ANIMS_ENABLED_BUTTON.addEventListener('click', () => {hasEnableAnimations = "true"; switchColors();});
ANIMS_DISABLED_BUTTON.addEventListener('click', () => {hasEnableAnimations = "false"; switchColors()});

// document.getElementById('anims-disabled').addEventListener('click', () => toggleAnimations(false));
// document.getElementById('anims-enabled').addEventListener('click', () => toggleAnimations(true));

OPEN_BUTTON.classList.remove('no-js');
OPEN_BUTTON.addEventListener('click', () => {DIALOG.showModal()})
CLOSE_BUTTON.addEventListener('click', () => {DIALOG.close(); localStorage.setItem("animationsEnabled", hasEnableAnimations);})

function switchColors() {
    if (hasEnableAnimations === "true") {
        ANIMS_ENABLED_BUTTON.style.backgroundColor = "green";
        ANIMS_ENABLED_BUTTON.style.color = "white";
        ANIMS_DISABLED_BUTTON.style.backgroundColor = "lightgrey";
        ANIMS_DISABLED_BUTTON.style.color = "black";
    }

    if (hasEnableAnimations === "false") {
        ANIMS_DISABLED_BUTTON.style.backgroundColor = "green";
        ANIMS_DISABLED_BUTTON.style.color = "white";
        ANIMS_ENABLED_BUTTON.style.backgroundColor = "lightgrey";
        ANIMS_ENABLED_BUTTON.style.color = "black";
    }
}

switchColors()

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
