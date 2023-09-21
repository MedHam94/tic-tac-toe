const playerTurn = document.querySelector('.playingUser')
const resetBtn = document.querySelector('button')
const winning = document.querySelector('.winning')
const cells = document.querySelectorAll('.cells')


cells.forEach(cell => cell.addEventListener('click', updateCell))



function updateCell(clickedCellEven){
    const clickedCell = clickedCellEven.target
}