// to use this functionality you need to add displayedText array in your html file
let currentSentence = 0;
let currentSentenceIndex = 0;
let intervalValue;
const textElement = document.querySelector("#textForRemoval");

function type() {
    const text = displayedText[currentSentence].substring(0, currentSentenceIndex + 1);
    textElement.innerHTML = text;
    currentSentenceIndex++;

    if (text === displayedText[currentSentence]) {
        clearInterval(intervalValue);
        setTimeout(() => {
            intervalValue = setInterval(deleteText, 50);
        }, 1000);
    }
}

function deleteText() {
    const text = displayedText[currentSentence].substring(0, currentSentenceIndex - 1);
    textElement.innerHTML = text;
    currentSentenceIndex--;

    if (text === "") {
        clearInterval(intervalValue);

        if (currentSentence === displayedText.length - 1) {
            currentSentence = 0;
        } else {
            currentSentence++;
        }``
        currentSentenceIndex = 0;

        setTimeout(() => {
            intervalValue = setInterval(type, 100);
        }, 200);
    }
}

intervalValue = setInterval(type, 100);