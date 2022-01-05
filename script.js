// VARIABLES
let sketchGrid = document.getElementById('sketch-grid');
let resetBtn = document.getElementById('reset-btn');
let gridSize = 16 * 16;






for(i = 0; i < gridSize; i++){
    let gridItem = document.createElement('div');
    gridItem.addEventListener('mouseover', () => {
        gridItem.className = 'cell-hover';
    })
    gridItem.className = "grid-item";
    sketchGrid.appendChild(gridItem);

}

// BUTTON THAT CLEARS THE SKETCH GRID AND CREATES PROMPT
resetBtn.addEventListener('click', () => {
    let userNum =prompt('Plug in a number to specify the width/height of the cells', '1-100');
    if(userNum == 'test'){
        console.log('Winner!')
    }else{
        alert('That was not a valid input, try again')
    }


    sketchGrid.querySelectorAll('.cell-hover').forEach(cell => 
        cell.classList.remove('cell-hover'));

})
