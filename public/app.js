const newWord = document.getElementById("new");

document.getElementById("view").addEventListener("click", viewDict);

function viewDict(){
    location.href="dict.html";
}

document.getElementById("submit").addEventListener("click", newWord);

function newWord(){
    location.href="new.html";
}