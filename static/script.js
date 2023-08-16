const cards = document.querySelectorAll('.card');

// Get the card meaning element
const cardMeaningElement = document.getElementById('cardMeaning');
const cardNameElement = document.getElementById('cardName');
/* Add a click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Get the id of the clicked card
        const cardId = card.getAttribute('id');
        
        // Get the card meaning from the card_meanings dictionary in app.py
        const cardMeaning = card_meanings[cardId];

        // Update the card meaning element with the retrieved meaning
        cardMeaningElement.innerHTML = cardMeaning;
    });
});
*/
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            // Find the overlay div element inside the clicked card
            const overlayDiv = card.querySelector(".card-back");
            // Remove the overlay div from its parent
            if (overlayDiv != null) {
                overlayDiv.remove();
            }
            // Get the id of the clicked card
            const cardId = card.getAttribute('id');
            console.log(cardId);

            const cardsName = card_mappings[cardId];
            console.log(cardsName);
            cardNameElement.innerHTML = cardsName;

            // Get the card meaning from the card_meanings dictionary in app.py
            const cardMeaning = card_meanings[cardId];
            // Update the card meaning element with the retrieved meaning
            cardMeaningElement.innerHTML = cardMeaning;
        });
    });
});
// Function to update the order of the cards based on card order values
document.addEventListener("DOMContentLoaded", function() {
    const cardIDs = [
        "TheFool", "TheMagician", "TheHighPriestess", "TheEmpress", "TheEmperor",
        "TheHierophant", "TheLovers", "TheChariot", "Strength", "TheHermit",
        "WheelofFortune", "Justice", "TheHangedMan", "Death", "Temperance",
        "TheDevil", "TheTower", "TheStar", "TheMoon", "TheSun",
        "Judgment", "TheWorld", "AceofPentacles", "TwoofPentacles", "ThreeofPentacles",
        "FourofPentacles", "FiveofPentacles", "SixofPentacles", "SevenofPentacles", "EightofPentacles",
        "NineofPentacles", "TenofPentacles", "PageofPentacles", "KnightofPentacles", "QueenofPentacles",
        "KingofPentacles", "AceofSwords", "TwoofSwords", "ThreeofSwords", "FourofSwords",
        "FiveofSwords", "SixofSwords", "SevenofSwords", "EightofSwords", "NineofSwords",
        "TenofSwords", "PageofSwords", "KnightofSwords", "QueenofSwords", "KingofSwords",
        "AceofCups", "TwoofCups", "ThreeofCups", "FourofCups", "FiveofCups",
        "SixofCups", "SevenofCups", "EightofCups", "NineofCups", "TenofCups",
        "PageofCups", "KnightofCups", "QueenofCups", "KingofCups", "AceofWands",
        "TwoofWands", "ThreeofWands", "FourofWands", "FiveofWands", "SixofWands",
        "SevenofWands", "EightofWands", "NineofWands", "TenofWands", "PageofWands",
        "KnightofWands", "QueenofWands", "KingofWands"
    ];

    const shuffleButton = document.getElementById("shuffle");
    const cardMeaningDiv = document.getElementById("cardMeaning");

    shuffleButton.addEventListener("click", function() {
        const shuffledCardIDs = shuffleArray(cardIDs);

        const cardContainers = document.querySelectorAll(".card-order");
        let cardBackDivs = null;
        cardMeaningDiv.innerHTML = null;
        cardNameElement.innerHTML = null;
        cardContainers.forEach((container, index) => {
            const cardID = shuffledCardIDs[index];
            const cardDiv = container.querySelector(".card");
            cardBackDivs = container.querySelector(".card-back");
            cardDiv.id = cardID;
        });
        if (cardBackDivs != null) {
            console.log(cardBackDivs.outerHTML);
        }
        cardContainers.forEach(container => {
            const cardDiv = container.querySelector(".card");
            const cardBackDiv = container.querySelector(".card-back");

            if (cardDiv && !cardDiv.querySelector(".card-back")) {
                cardDiv.innerHTML += cardBackDivs.outerHTML;
                console.log(cardBackDivs.outerHTML);
            }
            cardBackDivs = container.querySelector(".card-back");
        });


    });

    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
});