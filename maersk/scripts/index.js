const cards = [
  {
    number: 1,
    color: "#000000",
  },
  {
    number: 2,
    color: "#333333",
  },
  {
    number: 3,
    color: "#FFFFFF",
  },
  {
    number: 4,
    color: "#EFEFEF",
  },
  {
    number: 5,
    color: "#72C3DC",
  },
  {
    number: 6,
    color: "#288EAD",
  },
  {
    number: 7,
    color: "#6F98A8",
  },
  {
    number: 8,
    color: "#BFBFBF",
  },
  {
    number: 9,
    color: "#2F454E",
  },
];

function render() {
  let markUp = "";
  const cardContainer = document.getElementById("cards-container");
  cardContainer.innerHTML = markUp;
  cards.forEach((el) => {
    markUp = `<div class="card">
        <div class="cover" style="background-color:${el.color}">
        <span class="number desktop">${el.number}</span>
        </div>
        <div class="numberContianer">
        <span class="number mobile">${el.number}</span>
        </div>
        </div>`;
    cardContainer.innerHTML += markUp;
  });
}

function shuffle() {
  cards.sort(() => Math.random() - 0.5);
  render();
}

function sortCards() {
  cards.sort((a, b) => a.number - b.number);
  render();
}

(() => {
  render();
})();
