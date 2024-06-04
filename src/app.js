var API_KEY=""

// To view your entire dictionary
document.getElementById("view").addEventListener("click", viewDict);
function viewDict(){
    location.href="dict.html";
}

// search new word
document.getElementById("search").addEventListener("click", search);
document.getElementById("newWord").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        search();
    }
});
function search() {
    var newWord = document.getElementById("newWord").value.toLowerCase();
    var req = `https://api.wordnik.com/v4/word.json/${newWord}/definitions?limit=5&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=${API_KEY}`;
    fetch(req)
    .then(response => {return response.json()})
    .then(data => {
        localStorage.setItem('newWordData', JSON.stringify(data));
        location.href = "new.html";
        })
    .catch(error => {
        console.error('Error fetching definitions:', error);
    });
}
