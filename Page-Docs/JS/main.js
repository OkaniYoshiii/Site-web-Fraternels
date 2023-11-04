const FILE_INPUT = document.querySelector('#file-input');
const FILE_OUTPUT = document.querySelector('#file-output');
const FILE_FILTER = document.querySelector('#file-filter');

FILE_INPUT.addEventListener('change', printFileContent);
console.log(FILE_OUTPUT.data);

let oldObject;

function printFileContent(ev) {
    if(oldObject) revokeObject(oldObject);
    const FILE = ev.target.files[0]
    const FILE_NAME = FILE.name.toLowerCase();
    const IS_VALID_FILE = checkFileName(FILE_NAME);
    if(!IS_VALID_FILE) return;

    const OBJECT = URL.createObjectURL(FILE);
    FILE_OUTPUT.data = OBJECT;
    oldObject = OBJECT;
}

function checkFileName(fileName) {
    const ALLOWED_FILE_NAMES = ["localization.txt"];
    return ALLOWED_FILE_NAMES.some((ALLOWED_NAME) => {return ALLOWED_NAME === fileName});
}

function revokeObject(oldObject) {
    URL.revokeObjectURL(oldObject);
}

FILE_FILTER.addEventListener('click', (ev) => filterFileByLangage(["english","french"]));

const LOCALIZATION_KEYWORDS = ["Key","File","Type","UsedInMainMenu","NoTranslate"].map((keyword) => {return keyword.toLowerCase()});
// const LOCALIZATION_LANGUAGES = ["english","Context / Alternate Text","german","spanish","french","italian","japanese","koreana","polish","brazilian","russian","turkish","schinese","tchinese"];

function filterFileByLangage(searchedLangages) {
    const FILE_PARAGRAPH = FILE_OUTPUT.contentDocument.querySelector('pre');
    const LINES = FILE_PARAGRAPH.textContent.split('\n');
    const FILE_FIRST_LINE = LINES[0].toLowerCase();
    const FIRST_LINE_SECTIONS = FILE_FIRST_LINE.split(',');
    const LANGUAGE_INDEXES = searchedLangages.map((searchedLanguage) => {return FIRST_LINE_SECTIONS.indexOf(searchedLanguage)});
    const KEYWORDS_INDEXES = LOCALIZATION_KEYWORDS.map((KEYWORD) => {return FIRST_LINE_SECTIONS.indexOf(KEYWORD)});
    const SEARCHED_INDEXES = LANGUAGE_INDEXES.concat(KEYWORDS_INDEXES).sort();

    console.log(LANGUAGE_INDEXES);

    let localizationContent ="";
    LINES.forEach((LINE, index) => {
        const LINE_SECTIONS = LINE.split(',');
        const SEARCHED_SECTIONS = SEARCHED_INDEXES.map((INDEX) => {return LINE_SECTIONS[INDEX]});
        if (index) {

            console.log(SEARCHED_SECTIONS);
        }
        localizationContent += SEARCHED_SECTIONS.join() + "\n";

        // PROBLEME : si une virgule est présente dans une SECTION qui comporte des "" alors, cette virgule est prise en compte dans la méthode .split() ce qui casse l'index
    });
    FILE_PARAGRAPH.textContent = localizationContent
}