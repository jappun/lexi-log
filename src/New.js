import Word from './Word.js';

function renderNewWordDefn() {
    var wordData = localStorage.getItem('newWordData');
    wordData = JSON.parse(wordData);
    console.log(wordData);
    let frame = document.getElementById("result");
    if (frame) {
        if (wordData.every(element => !element.text)) {
            let page = document.getElementById("defns");
            page.innerHTML = `<p>Word not found.</p>`;
        } else {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `<h2>${wordData[0].word}</h2>`;
            let i = 1;
            wordData.forEach((element) => {
                if (element.text) {
                    let definitionDiv = document.createElement("div");
                    let partOfSpeech = element.partOfSpeech ? `<em>(${element.partOfSpeech})</em>` : '';
                    let exampleText = element.exampleUses.length > 0 ? `<ul><li>${element.exampleUses[0].text}</li></ul>` : '';
                    definitionDiv.innerHTML = `<p>${i}. ${partOfSpeech} ${element.text}</p> ${exampleText}`;
                    newDiv.appendChild(definitionDiv);
                    i++
                }
            });
            frame.appendChild(newDiv);
        }
    } 
}

document.addEventListener('DOMContentLoaded', renderNewWordDefn);

// To save the word
document.getElementById("notes").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        saveWord();
    }
});document.getElementById("save").addEventListener("click", saveWord);
function saveWord(){
    var wordData = localStorage.getItem('newWordData');
    wordData = JSON.parse(wordData);
    var selectedDefn = document.getElementById("defn-num").value;
    let word = wordData[0].word;
    let defn = wordData[selectedDefn-1].text;
    let notes = document.getElementById("notes").value;

    let newWord = new Word(word, defn, notes);
    let savedWords = JSON.parse(localStorage.getItem('savedWords')) || [];
    savedWords.push(newWord);
    localStorage.setItem('savedWords', JSON.stringify(savedWords));

    let frame = document.getElementById("defns");
    if (frame) {
        frame.innerHTML = "<h2>Saved!</h2>";
    }
}

// Go back to home
document.getElementById("go-home-new").addEventListener("click", goHome);
function goHome() {
    location.href="index.html";
}
