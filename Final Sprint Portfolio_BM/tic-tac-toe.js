const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWin() {
  return winningCombinations.some(combination => {
    return combination.every(index => cells[index].textContent === currentPlayer);
  });
}

function checkDraw() {
  return Array.from(cells).every(cell => cell.textContent !== '');
}

function resetBoard() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
}

function aiMove() {

  for (let i = 0; i < 9; i++) {
    if (cells[i].textContent === '') {
      cells[i].textContent = 'O';
      if (checkWin()) {
        setTimeout(() => {
          alert('O wins!');
          resetBoard();
        }, 1000);
        return;
      }
      cells[i].textContent = ''; 
    }
  }

  if (cells[4].textContent === '') {
    cells[4].textContent = 'O';
    currentPlayer = 'X'; 
    return;
  }

  const corners = [0, 2, 6, 8];
  for (let i = 0; i < corners.length; i++) {
    if (cells[corners[i]].textContent === '') {
      cells[corners[i]].textContent = 'O';
      currentPlayer = 'X'; 
      return;
    }
  }

  for (let i = 0; i < 9; i++) {
    if (cells[i].textContent === '') {
      cells[i].textContent = 'O';
      currentPlayer = 'X';
      return;
    }
  }
}


function handleClick(cell) {
  if (cell.textContent !== '') return;
  cell.textContent = currentPlayer;

  if (checkWin()) {
    setTimeout(() => {
      alert(`${currentPlayer} wins!`);
      resetBoard();
    }, 1000);
  } else if (checkDraw()) {
    setTimeout(() => {
      alert("It's a draw!");
      resetBoard();
    }, 1000);
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (currentPlayer === 'O') {
      aiMove();
    }
  }
}

cells.forEach(cell => {
  cell.addEventListener('click', () => handleClick(cell));
});