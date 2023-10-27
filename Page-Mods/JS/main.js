const MODS_TAGS = Array.from(document.querySelectorAll('.tags'));
const REGEXP = /\s,\s|\s,|,\s/g; // targets : " ," / ", " and " , "
const TAGS = [...new Set(MODS_TAGS.flatMap((MOD_TAGS) => {return MOD_TAGS.innerText.split(/\s,\s|\s,|,\s/g)}))];

const DOCUMENT_FRAGMENT = new DocumentFragment();
TAGS.forEach((TAG) => {
    const OPTION = document.createElement('option');
    OPTION.textContent = TAG;
    OPTION.value = TAG;
    DOCUMENT_FRAGMENT.appendChild(OPTION);
})

const SELECT_ELEMENTS = Array.from(document.querySelectorAll('select'));
const SELECT_ELEMENTS_COUNT = SELECT_ELEMENTS.length;

document.querySelector('fieldset').addEventListener('change', updateModList);

let selects = new Array(SELECT_ELEMENTS_COUNT);

function updateModList(ev) {
    const SELECT = ev.target;
    const SELECT_INDEX = SELECT_ELEMENTS.indexOf(SELECT);

    const OLD_DISABLED_OPTION = selects[SELECT_INDEX];

    if(OLD_DISABLED_OPTION) {
        console.log(OLD_DISABLED_OPTION);
        OLD_DISABLED_OPTION.forEach((OLD_OPTION) => OLD_OPTION.removeAttribute('disabled'));
    }

    if(!SELECT.value) {selects[SELECT_INDEX] = ''; return;}

    //Pour chaque SELECT, enregistrer quelle OPTION il a désactivé dans l'ensemble des SELECT
    const DISABLED_OPTIONS = document.querySelectorAll(`option[value="${SELECT.value}"]`);
    DISABLED_OPTIONS.forEach((OPTION) => OPTION.setAttribute('disabled',''));

    selects[SELECT_INDEX] = DISABLED_OPTIONS;
}

SELECT_ELEMENTS.forEach((select, index) => {select.appendChild(DOCUMENT_FRAGMENT.cloneNode(true));});

