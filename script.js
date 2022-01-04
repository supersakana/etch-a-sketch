// VARIABLES
let sketchGrid = document.getElementById('sketch-grid');
let resetBtn = document.getElementById('reset-btn')

let gridSize = 16 * 16;


for(i = 0; i < gridSize; i++){
    let gridItem = document.createElement('div')
    gridItem.addEventListener('mouseover', () => {
        gridItem.className = 'cell-hover';
    })
    gridItem.className = "grid-item";
    sketchGrid.appendChild(gridItem);


// BUTTON THAT CLEARS THE SKETCH GRID
    resetBtn.addEventListener('click', () => {
        gridItem.classList.remove('cell-hover');
    })
}



