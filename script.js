
// GLOBAL VARIABLES
let sketchGrid = document.getElementById('sketch-grid');
let resetBtn = document.getElementById('reset-btn');
let gridSize = 16 * 16;
let widthHeight = document.getElementById('width-height')
// let colorBtn = document.getElementById('color-btn')

// GENERATES DEFAULT GRIDS
function cellGenerator(){
    for(i = 0; i < gridSize; i++){
        let gridItem = document.createElement('div');
        gridItem.addEventListener('mouseover', () => {
            gridItem.className = 'cell-hover';
        })
        gridItem.className = "grid-item";
        sketchGrid.appendChild(gridItem);

    }
}
cellGenerator()
widthHeight.innerText = '16 X 16'

// CLEARS GRID AND PROMPT
resetBtn.addEventListener('click', () => {
    let userNum =prompt('Plug in a number to specify the width/height of the cells', '1-100');

    if(userNum >= 1 && userNum <= 100){
        sketchGrid.classList.remove('default-grid');
        sketchGrid.classList.add('custom-grid');
//CUSTOM SIZING
        gridSize = userNum * userNum;
        sketchGrid.style.gridTemplateColumns = 
        `repeat(${userNum}, 1fr)`;
        sketchGrid.style.gridTemplateRows = 
        `repeat(${userNum}, 1fr)`;
        widthHeight.innerText = userNum + " X " + userNum;
        cellGenerator();

    } else {
        alert('That was not a valid input, try again');
    }

// CLEAR
    sketchGrid.querySelectorAll('.cell-hover').forEach(cell => 
        cell.classList.remove('cell-hover'));

})



