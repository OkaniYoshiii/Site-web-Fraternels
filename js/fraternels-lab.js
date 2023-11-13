const ENTITY_OUTPUT = document.getElementById('entitygroups-output');

async function extractTextFromFile(file) {
    const FILE = await fetch(file);
    const TEXT = await FILE.text();
    const RESULT = new DOMParser().parseFromString(TEXT, "text/xml");
    return RESULT;
}

extractTextFromFile("../../files/entitygroups-copy.xml").then((XMLDocument) => {
    const ENTITYGROUPS = Array.from(XMLDocument.querySelectorAll('entitygroup'));
    let removeGroups = []; 
    ENTITYGROUPS.forEach((ENTITYGROUP) => {
        const NAME = ENTITYGROUP.getAttribute('name');
        removeGroups.push(`<remove xpath="//entitygroup[@name='${NAME}']"/>\n`);
    })
    ENTITY_OUTPUT.textContent = removeGroups.join("");

})