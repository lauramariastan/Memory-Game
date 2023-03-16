// Insert the images with an array:

const cardArray = [
  {
    name: "Cheese-burger",
    img: "images/cheese-burger.png",
  },

  {
    name: "Chocolate-bar",
    img: "images/chocolate-bar.png",
  },

  {
    name: "Coffee",
    img: "images/coffee-love.png",
  },

  {
    name: "Donut",
    img: "images/doughnut.png",
  },

  {
    name: "Fried-Chicken",
    img: "images/fried-chicken.png",
  },

  {
    name: "Ramen-noodle",
    img: "images/ramen-noodle.png",
  },

  {
    name: "Cheese-burger",
    img: "images/cheese-burger.png",
  },

  {
    name: "Chocolate-bar",
    img: "images/chocolate-bar.png",
  },

  {
    name: "Coffee",
    img: "images/coffee-love.png",
  },

  {
    name: "Donut",
    img: "images/doughnut.png",
  },

  {
    name: "Fried-Chicken",
    img: "images/fried-chicken.png",
  },

  {
    name: "Ramen-noodle",
    img: "images/ramen-noodle.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

// Create the board:

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/background.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

// Check for matches:

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/background.png");
    cards[optionTwoId].setAttribute("src", "images/background.png");
    alert("You have clicked the same image!");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match!👍");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/background.png");
    cards[optionTwoId].setAttribute("src", "images/background.png");
    alert("Sorry, try again!☹️");
  }

  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations, you found them all!😄";
  }
}

// Flip the card:

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);

  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 300);
  }
}

createBoard();
