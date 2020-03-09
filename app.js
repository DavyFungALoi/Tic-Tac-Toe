/* 
Gameboard Array
Player Object X
Player Object O
Setup Grid
Place Marker 
Check for win
Check for Draw
Reset Game

if (Xturn = true) {
    cellHTML.innerHTML= "X"
 }
 else {
    cellHTML.innerHTML= "O"


    if (!cellFilled) {
        console.log("hello")
        return }

 }
*/
const playerFactory = (name, marker) => {
    return { name, marker};
  };
const player1 =  playerFactory("Davy", "X")
const player2 =  playerFactory("Lana", "O")  
const currentTurnDisplay= document.getElementById('current-turn')
const selectCells = document.querySelectorAll('[data-grid]')
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
        console.log(Xturn)
        cellHTML.innerHTML= player1.marker
        switchturn()
        }
    else {
        cellHTML.innerHTML= player2.marker
        console.log(Xturn)
        switchturn()
     }
       
}
function switchturn() {
    Xturn =! Xturn
   }
