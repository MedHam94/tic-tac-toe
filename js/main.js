const playerTurn = document.querySelector('.playingUser')
const resetBtn = document.querySelector('button')
const winning = document.querySelector('.winning')
const cells = document.querySelectorAll('.cells')


cells.forEach(cell => cell.addEventListener('click', updateCell))

let xTurn = true

function updateCell(clickedCellEven){
    const clickedCell = clickedCellEven.target
    console.log(clickedCell)
    
    if(xTurn && clickedCell.innerHTML === ''){
        clickedCell.innerHTML = 'X'
        xTurn = false
    }else if(!xTurn && clickedCell.innerHTML === ''){
        clickedCell.innerHTML = 'O'
        xTurn = true
    } 
}

