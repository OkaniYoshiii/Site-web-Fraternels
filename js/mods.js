const SELECTS = Array.from(document.querySelectorAll('select'));
const SELECTS_COUNT = SELECTS.length;

document.querySelector('fieldset').addEventListener('change', (ev) => {
    const SELECT = ev.target;
    const SELECT_INDEX = SELECTS.indexOf(SELECT);
    
    updateTagList(SELECT, SELECT_INDEX);
    updateModList(SELECT, SELECT_INDEX);
});

let oldSelectedOptions = new Array(SELECTS_COUNT);

function updateTagList(select, selectIndex) {
    const OLD_DISABLED_OPTIONS = oldSelectedOptions[selectIndex];
    
    if(OLD_DISABLED_OPTIONS) {activate(OLD_DISABLED_OPTIONS);}
    
    const SELECTED_OPTION = document.querySelector(`option[value="${select.value}"]`);
    const FIRST_OPTION = document.querySelector('option[value=""]');

    if(SELECTED_OPTION === FIRST_OPTION) {oldSelectedOptions[selectIndex] = ''; return;}

    const OPTIONS = document.querySelectorAll(`option[value="${select.value}"]`);
    deactivate(OPTIONS);

    oldSelectedOptions[selectIndex] = OPTIONS;
}

function deactivate(elements) {
    elements.forEach((element) => element.setAttribute('disabled',''))
}
function activate(elements) {
    elements.forEach((element) => element.removeAttribute('disabled'))
}


const TAGS_LISTS = Array.from(document.querySelectorAll('.tags')).map((MOD_TAGS) => {return MOD_TAGS.innerText}).map((MOD_TAGS) => {return MOD_TAGS.split(/\s,\s|\s,|,\s/g)});

const REGEXP = /\s,\s|\s,|,\s/g; // targets : " ," / ", " and " , "
const TAGS = [...new Set(TAGS_LISTS.flat())];

const DOCUMENT_FRAGMENT = new DocumentFragment();
TAGS.forEach((TAG) => {
    const OPTION = document.createElement('option');
    OPTION.textContent = TAG;
    OPTION.value = TAG;
    DOCUMENT_FRAGMENT.appendChild(OPTION);
})

SELECTS.forEach((select, index) => {select.appendChild(DOCUMENT_FRAGMENT.cloneNode(true));});

const MODS = document.querySelectorAll('.mods > div');
let selectedTags = new Array(SELECTS_COUNT);

function updateModList(select, selectIndex) {
    selectedTags[selectIndex] = select.value;

    let modsCopy = [...MODS];
    let tagsListsCopy = [...TAGS_LISTS]
    
    let selectedMods = [];
    let unselectedMods = [...modsCopy];
    selectedTags.forEach((selectedTag) => {
        tagsListsCopy.forEach((tagList, index) => {
            if(tagList.some((tag) => {return tag === selectedTag})) {selectedMods.push(modsCopy[index]);}
        })
    })

    if(selectedTags.every((selectedTag) => {return (!selectedTag)})) {MODS.forEach(MOD => MOD.style.display = "block"); return;};

    // Version simple (plus lente a priori)

    // selectedMods = [...new Set(selectedMods)];
    // modsCopy.forEach((mod) => {mod.style.display = "none"})
    // selectedMods.forEach((mod) => {mod.style.display = "block"})
    
    //Version complexe (plus rapide a priori)

    selectedMods = [...new Set(selectedMods)];
    selectedMods.forEach((mod) => {if(unselectedMods.includes(mod)) {unselectedMods.splice(unselectedMods.indexOf(mod), 1)}});
    selectedMods.forEach((mod) => {mod.style.display = "block"})
    unselectedMods.forEach((unselectedMod) => {unselectedMod.style.display = "none"})
}