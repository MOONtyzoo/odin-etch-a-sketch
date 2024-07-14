let grid = document.querySelector("#grid")

let buttonBar = document.querySelector("#buttonBar")
let gridSizeInput = buttonBar.querySelector("#gridSizeInput")
let generateButton = buttonBar.querySelector("#generateButton")
let resetButton = buttonBar.querySelector("#resetButton")

generateButton.addEventListener("click", () => {
    let gridSize = gridSizeInput.value
    gridSizeInput.value = ""
    generateGrid(gridSize)
})
resetButton.addEventListener("click", () => clearGrid())

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
}

function generateGrid(size) {
    clearGrid()
    alert(`Generating a ${size}x${size} grid`)
}