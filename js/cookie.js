scoreID = document.querySelector("#score p");
multiplicatorID = document.querySelector("#multiplicator p");
autoclicID = document.querySelector("#autoclic p");
buttonClic = document.querySelector("#buttonClic");
buttonMult = document.querySelector("#buttonMult");
buttonAutoclic = document.querySelector("#buttonAutoclic");

// Default values
score = 0;
countMultiplicator = 1;
countAutoclic = 0;
priceMultiplicator = 20;
priceAutoclic = 40;

// Show values in HTML
function showScore() {
    scoreID.innerHTML = "Score: " + score;
}

function showMultiplicator() {
    multiplicatorID.innerHTML = "Next multiplicator price: " + priceMultiplicator;
    buttonMult.innerHTML = "Multiplicator x" + countMultiplicator;
}

function showAutoclic() {
    autoclicID.innerHTML = "Next autoclic price: " + priceAutoclic;
    buttonAutoclic.innerHTML = "Autoclic x" + countAutoclic;
}

// Increment Score
function incrementScore() {
    score += countMultiplicator;
    showScore()
}

// Increment autoclic
function autoclicScore() {
    score += countAutoclic;
    showScore()
}

// Increment Multiplicator if enough points and update values
function incrementMultiplicator() {
    if (score >= priceMultiplicator) {
        score -= priceMultiplicator;
        countMultiplicator += 1;
        multiplicatorPrice();
        showScore();
        showMultiplicator();
    }
    else {
        alert("You need at least " + priceMultiplicator);
    }   
}

function multiplicatorPrice() {
    priceMultiplicator *= 2;
}

// Increment Autoclic if enough points and update values
function incrementAutoclic() {
    if (score >= priceAutoclic) {
        score -= priceAutoclic;
        countAutoclic += 1;
        autoclicPrice();
        showScore();
        showAutoclic();
    }
    else {
        alert("You need at least " + priceAutoclic);
    }   
}

function autoclicPrice() {
    priceAutoclic *= 2;
}

setInterval(autoclicScore, 1000)
showScore();
showMultiplicator();
showAutoclic();
buttonClic.onclick = incrementScore;
buttonMult.onclick = incrementMultiplicator;
buttonAutoclic.onclick = incrementAutoclic;