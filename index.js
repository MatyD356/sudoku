const sudokuGrid = document.getElementById('sudoku-grid')


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
    let cellPointer = 0
    for(let i = 0; i< rowNum*colNum;i++){
        const col = parseInt(i/colNum)
        const div = document.createElement('div')
        div.className = 'gridCell'

        const input = document.createElement('input')
        input.value = arr[col][cellPointer]
        input.addEventListener('input',(event) => onChange(event, col, cellPointer, input))

        if(cellPointer % 8 === 0) {
            cellPointer = 0
        }
        cellPointer++
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

    mainArr[colNum][cellNum] = event.data
}

const mainArr = crateSudokuArr()
createGrid(9,9, sudokuGrid, mainArr)
