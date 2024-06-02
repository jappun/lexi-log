var API_KEY= "YOUR-API-KEY-HERE";

document.addEventListener("DOMContentLoaded", function() {
    // search new word
    document.getElementById("submit").addEventListener("click", search);
    // To view your entire dictionary
    document.getElementById("view").addEventListener("click", viewDict);

    function viewDict(){
        location.href="dict.html";

    }
    function search() {
        var newWord = document.getElementById("newWord").value;
        // todo: change source dictionary
        // get the top result
        var req = `https://api.wordnik.com/v4/word.json/${newWord}/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=${API_KEY}`;

        fetch(req)
        .then(response => {return response.json()})
        .then(data => {console.log(data);})
        .catch(error => {
            console.error('Error fetching definitions:', error);
        });
    }
});