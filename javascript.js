let grid = document.querySelector("#grid")

let buttonBar = document.querySelector("#buttonBar")
let gridSizeInput = buttonBar.querySelector("#gridSizeInput")
let generateButton = buttonBar.querySelector("#generateButton")
let resetButton = buttonBar.querySelector("#resetButton")

generateButton.addEventListener("click", () => alert("generate!"))
resetButton.addEventListener("click", () => alert("reset!"))