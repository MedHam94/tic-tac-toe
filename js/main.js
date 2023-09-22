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



// a function we can call to know if any player has 
function checkWin(){
    // check every row to see if there is a row with the same player
        //IF A ceLL IN THe row is empty skip that row
        // else if a player won  return the player that won
        
    // check every column to see if there is a column with the same player
        //IF A ceLL IN THe column is empty skip that row
        // else if a player won  return the player that won

    // check both diagonals to see if there is a diagonal with the same player
        //IF A ceLL IN THe column is empty skip that row
        // else if a player won  return the player that won
        // diagonals re cell index[0,4,8] and [2,4,6]

    // check if there.s a draw - no empty space

    // else return false
}