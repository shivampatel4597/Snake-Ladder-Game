// creation of board
document.addEventListener("DOMContentLoaded", function () {
  const snakeBoard = document.querySelector(".snake_board");
  const cellCount = 100;
  const cellsPerRowContainer = 10;
  const rowCount = cellCount / cellsPerRowContainer;

  for (let i = 0; i < rowCount; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add(
      i % 2 === 0 ? "row-container" : "row-container2"
    );

    for (let j = 1; j <= cellsPerRowContainer; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      const cellNumber = i * cellsPerRowContainer + j;
      // cell.textContent = cellNumber;
      rowContainer.appendChild(cell);
    }

    snakeBoard.appendChild(rowContainer);
  }
});

class Player {
  constructor(name,color, background) {
    this.name = name;
    // this.color = color;
    // this.background = background;

    this.position = 0; 
  }

  move(steps) {
    this.position += steps;
    // console.log("position is", this.position);
    this.position = Math.min(this.position, 100);
    if (this.position === 100) {
      alert(this.name, " win");
      location.reload();
    }
    snakeLadder(this,this.position);
    updatePlayerPosition(this);
  }
}

var Player1 = new Player("Player 1", "red",'black');
var Player2 = new Player("Player 2", "blue", 'yellow');

let snakesLad = {
  1:38,
  4:14, 8:30, 28:74, 21:42, 32:10, 36:6, 48:26, 50:67, 62:18, 71:92, 80:99, 95:56, 97:78, 

}
function snakeLadder(player,coordinate){
  for(let key in snakesLad){
      if(key == coordinate){
          player.position = snakesLad[key];
          console.log(player.position)
          console.log("updated Position:",snakesLad[key])
          break;
      }
    
  }
}
function updatePlayerPosition(player) {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, index) => {
    // cell.style.color = '';
    // cell.style.background = '';
    if (index + 1 === player.position) {
      cell.textContent = player.name;
      
      //  cell.classList.add('play1')

      
        //  cell.style.color = player.color;
        //  cell.style.fontSize = '20px';
      // console.log(cell.textContent);
    } else if (cell.textContent === player.name) {
      cell.textContent = index + 1;
    }
  });
}

function rollDice() {
  let min = 1,
    max = 6;
  let randomDice = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(currentPlayer);
  console.log(randomDice);
  
  currentPlayer.move(randomDice);

  currentPlayer = currentPlayer === Player1 ? Player2 : Player1;
}

let currentPlayer = Player1;
