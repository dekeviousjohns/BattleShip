// You should add the tiles of gameboard to the dom
// The AI must select a random tile on the gameboard
// You will select tiles and the game will indicate a HIT or a miss
// On HIT the game is over
// Add a button to start a new game
var board = document.getElementById('board')

var reset = document.getElementById('reset')

var win = false;
var moves = []
for (let i = 0; i <= 8; i++) {
    var square = document.createElement('button');
    square.classList.add('square');
    square.setAttribute('data-value', i) ;

    board.appendChild(square);

	square.addEventListener('click', function () {
        display(this);
    })
}

var AI = Math.floor(Math.random() * 9);

var player = true;
function display(block) {
    let tile = block.getAttribute('data-value')
    if (!win) {
        if (tile == AI) {
            block.style.backgroundColor = "green"
            win = true
        }else {
            block.style.backgroundColor = "red"
        }

    }
}

reset.addEventListener('click', function () {
    window.location.reload()
})







