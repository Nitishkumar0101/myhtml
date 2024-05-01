let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

function handleCellClick(event) {
    const index = parseInt(event.target.id.split('-')[1]);
    if (board[index] === "" && !checkWinner()) {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWinner()) {
            alert(`${currentPlayer} wins!`);
        } else if (board.every(cell => cell !== "")) {
            alert("It's a draw try again!");
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
}
