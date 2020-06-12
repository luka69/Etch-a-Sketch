const divContainer = document.querySelector('.container');


document.querySelector('#newGrid').addEventListener('click', getNumOfGrids)
document.querySelector('#reset').addEventListener('click', resetGrid)


let colorChoice = 'default';

//MAIN FUNCTION ---------------------------------------------------------------------

function getNumOfGrids() {
    resetGrid();
    const sideLength = getLengthNumber();
    divContainer.setAttribute('style','grid-template-columns: repeat('+ sideLength +', 1fr)');
    for (let i = 0; i < sideLength**2; i++) {
        const div = document.createElement('div');
        div.classList.add('layout');
        divContainer.appendChild(div); 
    };
    document.querySelectorAll('.layout').forEach(layout => layout.addEventListener('mouseover', changeColor));
}

//MOUSEOVER FUNCTION ---------------------------------------------------------------------


function changeColor() {
    if (colorChoice === 'default') {
        resetCell(this);
        this.classList.add('hover');
    }
}

function resetCell(cell) {
    cell.classList = 'layout';
    if (cell.style.backgroundColor) cell.style.backgroundColor = "";
}

// RESET GRID FUNCTION

function resetGrid() {
    divContainer.textContent = '';
    
};


//ASKING FOR NUMBER OF GRIDS ON EACH SIDES------------------------------------------------- 

function getLengthNumber() {
    let sideLength = Number(prompt('How long do you want each side ( 0 - 128 )'));
    while (isNaN(sideLength) || sideLength < 0 || sideLength > 128) {
        sideLength = Number(prompt('How long do you want each side ( 0 - 128 )'));
    };
    return Math.floor(sideLength);
}