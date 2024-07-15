let grid = document.querySelector("#grid")
let gridSize = 4;

let buttonBar = document.querySelector("#buttonBar")
let gridSizeInput = buttonBar.querySelector("#gridSizeInput")
let generateButton = buttonBar.querySelector("#generateButton")
let resetButton = buttonBar.querySelector("#resetButton")

let buttonWidthPercentage = 10;

grid.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.className == "colorBlock") {
        changeColor(target)
    }
})

generateButton.addEventListener("click", () => {
    gridSize = gridSizeInput.value
    gridSizeInput.value = ""
    generateGrid()
})
resetButton.addEventListener("click", () => {
    generateGrid()
})

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
}

// Will overwrite the previous grid and referesh the contents
function generateGrid() {
    clearGrid()
    buttonWidthPercentage = 100/gridSize
    for (let i = 0; i < gridSize*gridSize; i++) {
        addGridNode()
    }
}

function addGridNode() {
    let newGridNode = document.createElement("div")
    newGridNode.className = "gridNode"
    newGridNode.style.flexBasis = `${buttonWidthPercentage}%`

    let colorBlock = document.createElement("div")
    colorBlock.className = "colorBlock"
    newGridNode.appendChild(colorBlock)

    grid.appendChild(newGridNode)
}

function changeColor(colorBlock) {
    colorBlock.style.backgroundColor = "#000000"
}

generateGrid(gridSize)