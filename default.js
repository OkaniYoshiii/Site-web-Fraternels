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

// Entering Page Transition

const PAGE_SAME_AS_LAST_ONE = sessionStorage.getItem('oldURL') === window.location.href
if (!PAGE_SAME_AS_LAST_ONE) window.addEventListener('load', () => {playAnimation(); changeAnimationState();});

// Leaving Page Transition

const ANCHOR_TAGS = document.querySelectorAll('a:not([target="_blank"])');
ANCHOR_TAGS.forEach((ANCHOR_TAG) => {ANCHOR_TAG.addEventListener('click', transitionToNextPage)});

function transitionToNextPage(ev) {
    const HREF = ev.currentTarget.href;
    const TRANSITION_STYLE = window.getComputedStyle(document.body,'::after').transitionDuration;
    const TRANSITION_DURATION = Number(TRANSITION_STYLE.slice(0, TRANSITION_STYLE.indexOf('s')));

    sessionStorage.setItem('oldURL', window.location.href);

    if(window.location.href === HREF) return;
    
    playAnimation();
    delayRedirection(ev,HREF, TRANSITION_DURATION);
}

function delayRedirection(ev, HREF, delay) {
    ev.preventDefault();
    setTimeout(() => {window.location.href = HREF}, 2500);
}

function changeAnimationState() {
    document.body.addEventListener('transitionend', () => {
        document.documentElement.toggleAttribute('data-animation-running', '');
        document.documentElement.setAttribute('data-next-animation', 'leaving-page');
    });
}

function playAnimation() {
    document.documentElement.setAttribute('data-animation-running','');
}