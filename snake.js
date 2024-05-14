// creation of board
document.addEventListener("DOMContentLoaded", function() {
    const snakeBoard = document.querySelector(".snake_board");
    const cellCount = 100;
    const cellsPerRowContainer = 10;
    const rowCount = cellCount / cellsPerRowContainer;

    for (let i = 0; i < rowCount; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add(i % 2 === 0 ? "row-container" : "row-container2");

        for (let j = 1; j <= cellsPerRowContainer; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            const cellNumber = i * cellsPerRowContainer + j;
            cell.textContent = cellNumber;
            rowContainer.appendChild(cell);
        }

        snakeBoard.appendChild(rowContainer);
    }
});


class Player {
  constructor(name) {
    this.name = name;
    this.position = 0;
   
  }

  move(steps) {
  
    this.position += steps;
   console.log("position is", this.position)
    this.position = Math.min(this.position, 100);
    if(this.position === 100){
     alert(this.name," win")
   location.reload()
    }
    updatePlayerPosition(this);
  }
}

var Player1 = new Player("Player 1");
var Player2 = new Player("Player 2");


function updatePlayerPosition(player) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
      
      if (index + 1 === player.position) {
        cell.textContent = player.name;
       
        console.log(cell.textContent)
        
      } else if (cell.textContent === player.name) {
        cell.textContent = index + 1;
      }
    });
  }

function rollDice() {
  let min = 1,
    max = 6;
  let randomDice = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomDice);
  console.log(currentPlayer)
  currentPlayer.move(randomDice);

  currentPlayer = (currentPlayer === Player1) ? Player2:Player1;
}

let currentPlayer = Player1;  

