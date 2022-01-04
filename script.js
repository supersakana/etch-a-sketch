// VARIABLES
let sketchGrid = document.getElementById('sketch-grid');
let resetBtn = document.getElementById('reset-btn')
// Depends on # of grid-template-columns/rows
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

        // let userNum = prompt('Choose a grid size between 2 - 100 blocks width/height')

        // if(userNum == 'test'){
        //     console.log('I work!')
        // }
    })
}
