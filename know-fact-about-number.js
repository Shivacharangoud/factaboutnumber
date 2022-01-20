let inputE = document.getElementById("userInput");
let factE = document.getElementById("fact");
let spinnerE = document.getElementById("spinner");

function createAndAppend(data) {
    let text = data.fact;
    factE.textContent = text;
}


function searchFact(event) {
    if (event.key === "Enter") {
        factE.textContent = "";
        let text = inputE.value;
        let url = "https://apis.ccbp.in/numbers-fact?number=" + text;
        spinnerE.classList.toggle("d-none");
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerE.classList.toggle("d-none");
                createAndAppend(jsonData);

            });

    }

}


inputE.addEventListener("keyup", searchFact);