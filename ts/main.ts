const Regexps = {
    firstCharInLine: new RegExp(/^\w/gm),
    firstCharAfterDot: new RegExp(/\.\s?\w/gm),
};
const  outputsContainer: HTMLElement | null = document.getElementById("outputsContainer");

function processReformat() {
    while (outputsContainer.hasChildNodes()) {
        outputsContainer.removeChild(outputsContainer.lastChild);
    }

    const input: any = document.getElementById("inpt");
    createOutputElement(input.value)
}

function createOutputElement(rawText: string) {
    const newContainer = document.createElement("div");
    const newElement = document.createElement("textarea");

    newContainer.setAttribute('class', 'oneOutputContainer');
    newElement.setAttribute('class', 'outputReelset');

    let text = rawText.toLowerCase();
    text = text.replace(Regexps.firstCharInLine, char => char.toUpperCase());
    text = text.replace(Regexps.firstCharAfterDot, char => char.toUpperCase());

    newElement.innerHTML = text;
    newContainer.appendChild(newElement);
    outputsContainer.appendChild(newContainer);
}


document.getElementById("butt-butt").addEventListener("mouseup", ()=>{
    processReformat();
});

