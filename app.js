const playerFactory = (name, marker) => {
    return { name, marker};
  };
 
const player1 =  playerFactory("Kipsate", "X")
const player2 =  playerFactory("Boes", "O")  
const selectCells = document.querySelectorAll('[data-grid]')
const selectGrid = document.querySelectorAll("grid")
const winningMessage = document.getElementById('winningMessage')
document.getElementById('New-Game').addEventListener('click', resetGame)


const gameWinningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function resetGame() {
    selectCells.forEach(cell => {
        cell.innerHTML = ""
        cell.classList.remove("X")
        cell.classList.remove("O")
        winningMessage.innerHTML = "Winner is to be Determined"
        renderGameboard()
    });

}

let Xturn = true
function renderGameboard() {
    selectCells.forEach(cell => {
     cell.addEventListener('click', clickHandle, {once: true})
      
    });
 }
renderGameboard()

function clickHandle(e) {
    const cellHTML=e.target
    if (!Xturn) {
        cellHTML.innerHTML= player1.marker
        cellHTML.classList.add("X")
        if (checkWinX(true))  {
            winningMessage.innerHTML = `${player1.name} has won the day`
        }

        else if (isDraw(true)) {
            winningMessage.innerHTML = "It is a Draw, press New Game to play again"
        }    
        else (switchturn() )                       
        
        }
    else {
        cellHTML.innerHTML= player2.marker
        cellHTML.classList.add("O")
        if (checkWinO(true)){
            winningMessage.innerHTML = `${player2.name} has won the day`
        }
        else if (isDraw(true)) {
            winningMessage.innerHTML = "It is a Draw, press New Game to play again"
        }    
        else (switchturn() )
     }
       
}
    function switchturn() {
    Xturn =! Xturn
   }

    function checkWinX() {
    return gameWinningCondition.some(combination => {
         return combination.every(index => {
             return selectCells[index].classList.contains("X")
         })
     })
 
 }   
    function checkWinO() {
    return gameWinningCondition.some(combination => {
         return combination.every(index => {
             return selectCells[index].classList.contains("O")
         })
     })
 
 }   
 function isDraw() {
    return [...selectCells].every(cell => {
        return cell.classList.contains("X") || 
        cell.classList.contains("O")
    })
}



 
