const player1 = {
  elementId: "squirtle",
  name: "Squirtle",
  image: "./img/squirtle.png",
  health: "60",
  diceRoll: 6,
};

const player2 = {
  elementId: "charmander",
  name: "Charmander",
  image: "./img/charmander.png",
  health: "60",
  diceRoll: 6,
};

function renderCharacter(data) {
  document.getElementById(data.elementId).innerHTML = `
           <div class="character">
          <div class="squirtle-top-card">
            <h2 class="pokemon-player-name">${data.name}</h2>
            <div class="img-container">
              <img
                src="${data.image}"
              />
            </div>
            <p class="health">Health: ${data.health}</p>
          </div>
          <div class="character-bottom-card">
            <div class="dice-container">
              <p class="dice-number">${data.diceRoll}</p>
            </div>
          </div>
        </div>

`;
}

renderCharacter(player1);

renderCharacter(player2);
