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
        const div = document.createElement('div')
        const input = document.createElement('input')
        input.value = arr[parseInt(i/colNum)][cellPointer]
        input.pattern = /[1-9]/
        if(cellPointer % 8 === 0) cellPointer = 0
        div.className = 'gridCell'
        div.appendChild(input)
        cellPointer++
        if(sudokuGrid){
            gridElement.appendChild(div)
        }
    }
}
function updateArr(arr) {

}

const arr = crateSudokuArr()
createGrid(9,9, sudokuGrid, arr)
