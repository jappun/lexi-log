function renderNewWordDefn() {
    var wordData = localStorage.getItem('newWordData');
    
    if (wordData) {
        wordData = JSON.parse(wordData);
        console.log(wordData);

        let frame = document.getElementById("result");
        if (frame) {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `<h2>${wordData[0].word}</h2>`;
            let i = 1;
            wordData.forEach((element) => {
                if (element.text) {
                    let definitionDiv = document.createElement("div");
                    definitionDiv.innerHTML = `<p>${i}. <em>(${element.partOfSpeech})</em> ${element.text}</p> <ul><li>${element.exampleUses[0].text}</li></ul>`;
                    newDiv.appendChild(definitionDiv);
                    i++
                }
            });
            frame.appendChild(newDiv);
        } else {
            console.error('Frame element not found.');
        }
    } else {
        console.error('No word data found in localStorage.');
    }
}

document.addEventListener('DOMContentLoaded', renderNewWordDefn);
