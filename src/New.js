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
// !!! functionality not actually implemented yet
document.getElementById("save").addEventListener("click", saveWord);
function saveWord(){
    let frame = document.getElementById("defns");
    if (frame) {
        frame.innerHTML = "<p>Word saved!</p>";
    }
}

// Go back to home
document.getElementById("go-home").addEventListener("click", goHome);
function goHome() {
    location.href="index.html";
}
