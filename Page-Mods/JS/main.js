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

document.querySelector('fieldset').addEventListener('change', (ev) => {updateTagOptions(ev), updateModList() });

let oldSelectedOptions = new Array(SELECT_ELEMENTS_COUNT);

function updateTagOptions(ev) {
    const SELECT = ev.target;
    const SELECT_INDEX = SELECT_ELEMENTS.indexOf(SELECT);
    const OLD_DISABLED_OPTIONS = oldSelectedOptions[SELECT_INDEX];
    
    if(OLD_DISABLED_OPTIONS) {activateElements(OLD_DISABLED_OPTIONS);}
    
    const SELECTED_OPTION = document.querySelector(`option[value="${SELECT.value}"]`);
    const FIRST_OPTION = document.querySelector('option[value=""]');

    if(SELECTED_OPTION === FIRST_OPTION) {oldSelectedOptions[SELECT_INDEX] = ''; return;}

    const OPTIONS = document.querySelectorAll(`option[value="${SELECT.value}"]`);
    deactivateElements(OPTIONS);

    oldSelectedOptions[SELECT_INDEX] = OPTIONS;
}

function deactivateElements(elements) {
    elements.forEach((element) => element.setAttribute('disabled',''))
}
function activateElements(elements) {
    elements.forEach((element) => element.removeAttribute('disabled'))
}


function updateModList() {

}

SELECT_ELEMENTS.forEach((select, index) => {select.appendChild(DOCUMENT_FRAGMENT.cloneNode(true));});

