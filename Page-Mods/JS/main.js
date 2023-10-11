// I - Initialisation

// Aller chercher les tags
// Extraire les tags en supprimant les espaces et charactères non voulus
// Gérer les erreurs si un tags est mal rentré
// Insérer chaque tag en tant qu'option dans les "select"

// II - Intéractivité une fois initialisé 

// Recupérer la valeur des "select" lorsque l'on chnage la valeur du "select"
// Afficher les mods corespondant aux valeurs dans les "select"

const MODS = document.querySelectorAll('.mods > div');

let tagsLists = new Array;
let tags = new Array;

MODS.forEach((MOD) => {
    const TAGS_LIST = MOD.querySelector('.tags');
    let tagsList = new Object;

    const ELEMENT_TAGS = TAGS_LIST.textContent.split(',').map((tag) => {return tag.trim()});
    tagsList.tags = ELEMENT_TAGS;
    tagsList.element = MOD;

    tags.push(ELEMENT_TAGS);
    tagsLists.push(tagsList);
})

tags = Array.from(new Set(tags.flat()))


const DOCUMENT_FRAGMENT = new DocumentFragment();

tags.forEach((tag) => {
    const OPTION = document.createElement('option');
    OPTION.textContent = tag;
    OPTION.value = tag;
    DOCUMENT_FRAGMENT.appendChild(OPTION);
})

const SELECT_ELEMENTS = document.querySelectorAll('select');
const SELECT_ELEMENTS_COUNT = SELECT_ELEMENTS.length;

let selectedTags = new Array(SELECT_ELEMENTS_COUNT);
let disabledOptions = new Object;


SELECT_ELEMENTS.forEach((select, index) => {
    select.appendChild(DOCUMENT_FRAGMENT.cloneNode(true));
    select.addEventListener('change',() => {
        selectedTags[index] = select.value;
        toggleOptions(select,index);
        displayModsByTags();
    })
});

function toggleOptions(select, index) {
    disabledOptions[index]?.forEach((OPTION) => {OPTION.toggleAttribute('disabled')});
        
    if(select.value) {
        disabledOptions[index] = Array.from(document.querySelectorAll(`option[value=${select.value}]`))
        disabledOptions[index].forEach((OPTION) => {OPTION.toggleAttribute('disabled')});
    } else {
        disabledOptions[index] = null;
    }
}

const OUTPUT = document.querySelector('.mod-count');
const MODS_COUNT = MODS.length;

OUTPUT.textContent = MODS_COUNT;

function displayModsByTags() {
    const HAS_SELECTED_TAGS = selectedTags.some((tag) => {return (tag)});
    let selectedModsCount = 0;


    for (let i = 0; i < tagsLists.length; i++) {
        const ELEMENT = tagsLists[i].element;
        if(!HAS_SELECTED_TAGS) {
            selectedModsCount = MODS_COUNT;
            ELEMENT.style.display = 'block';
        } else {
            const TAGS = tagsLists[i].tags;
            const HAS_MATCHING_TAGS = TAGS.some((TAG) => {return selectedTags.includes(TAG)});
            if(HAS_MATCHING_TAGS) {
                ELEMENT.style.display = 'block';
                selectedModsCount += 1;
            } else {
                ELEMENT.style.display = 'none';
            }
        }
    }

    OUTPUT.textContent = selectedModsCount;
}