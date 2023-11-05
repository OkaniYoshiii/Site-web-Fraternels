const FILE_INPUT = document.querySelector('#file-input');
const FILE_OUTPUT = document.querySelector('#file-output');
const FILE_FILTER = document.querySelector('#file-filter');

FILE_INPUT.addEventListener('change', printFileContent);

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

function filterFileByLangage(searchedLangages) {
    const FILE_PARAGRAPH = FILE_OUTPUT.contentDocument.querySelector('pre');
    const LINES = FILE_PARAGRAPH.textContent.split('\n');
    const FILE_FIRST_LINE = LINES[0].toLowerCase();
    const FIRST_LINE_SECTIONS = FILE_FIRST_LINE.split(',');
    const LANGUAGE_INDEXES = searchedLangages.map((searchedLanguage) => {return FIRST_LINE_SECTIONS.indexOf(searchedLanguage)});
    const KEYWORDS_INDEXES = LOCALIZATION_KEYWORDS.map((KEYWORD) => {return FIRST_LINE_SECTIONS.indexOf(KEYWORD)});
    const SEARCHED_INDEXES = LANGUAGE_INDEXES.concat(KEYWORDS_INDEXES).sort();

    let localizationContent ="";
    LINES.forEach((LINE, globalIndex) => {
        let lineSections = LINE.split(',');
        const QUOTED_SENTENCE_START = /^"/;
        const QUOTED_SENTENCE_END = /"$/;
        let quotedSentenceHasStarted = false
        let sentenceStartIndex;
        let newLineSections = [];
        lineSections.forEach((lineSection, index) => {
            
            if(QUOTED_SENTENCE_START.test(lineSection)) {
                quotedSentenceHasStarted = true;
                newLineSections.push(lineSection + ',');
                sentenceStartIndex = newLineSections.indexOf(lineSection + ',');
            }
            
            if (!quotedSentenceHasStarted) {
                newLineSections.push(lineSection);
                return;
            }
            
            if (sentenceStartIndex === index) return;
            
            if (QUOTED_SENTENCE_END.test(lineSection)){
                quotedSentenceHasStarted = false;
                newLineSections[sentenceStartIndex] += lineSection;
            } else {
                newLineSections[sentenceStartIndex] += lineSection + ',';
            };
        })
        const SEARCHED_SECTIONS = SEARCHED_INDEXES.map((INDEX) => {return newLineSections[INDEX]});
        localizationContent += SEARCHED_SECTIONS.join() + "\n";
    })
    FILE_PARAGRAPH.textContent = localizationContent
}