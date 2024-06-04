document.addEventListener('DOMContentLoaded', function() {
    let savedWords = JSON.parse(localStorage.getItem('savedWords')) || [];
    let table = document.getElementById('dict-view');
    if (savedWords.length === 0) {
        table.innerHTML = `<h2>Try adding some words first.</h2>`
    } else {
        savedWords.forEach(word => {
            let row = table.insertRow();
            row.insertCell(0).textContent = word.word;
            row.insertCell(1).textContent = word.defn;
            row.insertCell(2).textContent = word.notes;
        });
    }
});

// Go back to home
document.getElementById("go-home-dict").addEventListener("click", goHome);
function goHome() {
    location.href="index.html";
}