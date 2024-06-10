document.addEventListener('DOMContentLoaded', function() {
    let savedWords = JSON.parse(localStorage.getItem('savedWords')) || [];
    let table = document.getElementById('dict-view');

    if (savedWords.length === 0) {
        table.innerHTML = `<h2>Try adding some words first.</h2>`;
    } else {
        savedWords.forEach((word, index) => {
            // add row for word
            let row = table.insertRow();
            row.insertCell(0).innerHTML = `<strong>${word.word}</strong>`
            row.insertCell(1).textContent = word.defn;
            row.insertCell(2).textContent = word.notes;
            // listen for selection
            row.addEventListener('click', (event) => {
                handleRowClick(event, index);
            });

            row.addEventListener('dblclick', (event) => {
                handleRowDoubleClick(event, index);
            });
        });
    }
});

// Go back to home
document.getElementById("go-home-dict").addEventListener("click", goHome);
function goHome() {
    location.href = "index.html";
}

let lastClickedRow = null;

// Select row
function handleRowClick(event) {
    if (lastClickedRow !== event.currentTarget) {
        if (lastClickedRow) {
            lastClickedRow.classList.remove('clicked-row');
        }
        event.currentTarget.classList.add('clicked-row');
        lastClickedRow = event.currentTarget;
    }
}

// Delete selected row
function handleRowDoubleClick(rowIndex) {
    let table = document.getElementById('dict-view');
    table.deleteRow(rowIndex + 1); 

    // delete
    let savedWords = JSON.parse(localStorage.getItem('savedWords')) || [];
    savedWords.splice(rowIndex, 1);
    localStorage.setItem('savedWords', JSON.stringify(savedWords));

    // reset
    lastClickedRow = null; 
    renderTable();
}

function renderTable() {
    let savedWords = JSON.parse(localStorage.getItem('savedWords')) || [];
    let table = document.getElementById('dict-view');
    table.innerHTML = `
        <tr>
            <th></th>
            <th>Definition</th>
            <th>Notes</th>
        </tr>
    `;

    if (savedWords.length === 0) {
        table.innerHTML = `<h2>Try adding some words first.</h2>`;
    } else {
        savedWords.forEach((word, index) => {
            let row = table.insertRow();
            row.insertCell(0).innerHTML = `<strong>${word.word}</strong>`
            row.insertCell(1).textContent = word.defn;
            row.insertCell(2).textContent = word.notes;
            row.addEventListener('click', (event) => {
                handleRowClick(event, index);
            });
            row.addEventListener('dblclick', (event) => {
                handleRowDoubleClick(event, index);
            });
        });
    }
}
