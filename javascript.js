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
    if (colorBlock.style.backgroundColor == "") {
        let H = Math.floor(Math.random() * 360)
        let S = 100
        let L = 45
        let A = 0.1
        colorBlock.style.backgroundColor = `hsl(${H} ${S}% ${L}% / ${A})`
    } else {
        let colorStr = colorBlock.style.backgroundColor
        colorStr = colorStr.slice(colorStr.indexOf('(') + 1, colorStr.indexOf(')'));
        let colorArr = colorStr.split(','),
            i = colorArr.length;

        while (i--)
        {
            colorArr[i] = parseFloat(colorArr[i], 10);
        }

        let R = colorArr[0]
        let G = colorArr[1]
        let B = colorArr[2]
        let A = Math.min(colorArr[3] + 0.1, 1)
        colorBlock.style.backgroundColor = `rgb(${R} ${G} ${B} / ${A})`
    }
}

generateGrid(gridSize)