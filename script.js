// VARIABLES
let sketchGrid = document.getElementById('sketch-grid');
let gridItem = document.createElement('div')
let resetBtn = document.getElementById('reset-btn')


// ADDS DIVS TO OUR 16 X 16 GRID & HOVER EVENT
for(i = 0; i < 256; i++){
    let gridItem = document.createElement('div')
    gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = 'black';
    })
    gridItem.className = "grid-item";
    sketchGrid.appendChild(gridItem);
}

// RESETS THE COLOR ON THE SKETCH GRID
resetBtn.addEventListener('click', () => {
    console.log('test')
})

