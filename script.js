const gridContainer = document.getElementById("grid-container");
const resetButton = document.getElementById("btn-Erase");
const restartBoard = document.getElementById("btn-SizeChanger");
const rainbowButton = document.getElementById("btn-Rainbow");
const greyButton = document.getElementById("btn-Grey");


rainbowButton.addEventListener('click', changeColor);
greyButton.addEventListener('click', onlyGrey);


function gridGenerator(originalGridSize) {
    gridContainer.textContent = "";
    let gridSize = 500 / originalGridSize;
    

    for (let i = 0; i < (originalGridSize * originalGridSize); i++) {
        let grid = document.createElement("div");
        grid.style.width = `${gridSize}px`;
        grid.style.height = `${gridSize}px`;
        gridContainer.appendChild(grid).className = "grid-item";
        grid.addEventListener("mouseover", colorDefault);
        resetButton.addEventListener('click', function erase() {
            grid.style.backgroundColor = "#D6F9DD";
        });        
    };
};

gridGenerator(16);

restartBoard.addEventListener('click', resetGame);

function resetGame() {
    let userInput = prompt("Please enter an integer between 5 and 100!", '16');

    if (userInput < 5) {
        alert("Your number is too small, please try again!");
        resetGame();
    }  else if (userInput > 100) {
        alert("Your input is too high, please try again!");
        resetGame();
    }  else  {
        gridGenerator(userInput);
    }
}



function changeColor() {
    let gridChild = document.querySelectorAll(".grid-item")
    gridChild.forEach(element => element.addEventListener('mouseover', () => {
        let getHex = (Math.random() * 0xfffff * 1000000).toString(16).slice(0,6);
        element.style.background = `#${getHex}`;
    }));
};

function onlyGrey() {
    let gridChild = document.querySelectorAll(".grid-item")
    gridChild.forEach(element => element.addEventListener('mouseover', () => {
        element.style.background = "#C5D6D8";
    }));
};


function colorDefault() {
    this.style.backgroundColor = "#C5D6D8";
}


