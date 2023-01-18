function crateSudokuArr(){
    return [
        [1,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,9],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null],
    ]
}
function createGrid(rowNum, colNum, gridElement, arr){
    for(let i = 0; i< rowNum*colNum;i++){
        const col = parseInt(i/colNum)
        const cellNum =  i - col* 9
        const div = document.createElement('div')
        div.className = 'gridCell'

        const input = document.createElement('input')
        input.value = arr[col][cellNum]
        input.addEventListener('input',(event) => {onChange(event, col, cellNum, input)})
        if(sudokuGrid){
            div.appendChild(input)
            gridElement.appendChild(div)
        }
    }
}
function onChange(event, colNum, cellNum, input){
    const parsedData = event.data ? parseInt(event.data) : null
    const parsedValue = parseInt(event.target.value)
    if(isNaN(parsedData) || parsedValue > 9 || parsedValue < 1){
        return input.value = mainArr[colNum][cellNum]
    }
    mainArr[colNum][cellNum] = parseInt(event.data)
}

const sudokuGrid = document.getElementById('sudoku-grid')
const mainArr = crateSudokuArr()
createGrid(9,9, sudokuGrid, mainArr)