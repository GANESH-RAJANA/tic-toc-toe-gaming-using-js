// restart game button

var start = document.querySelector('#b');

//Grab all the Squares

var squares = document.querySelectorAll('td');

//clear all the Squares

function ClearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }

}

start.addEventListener('click', ClearBoard);

// check the Square marker

function changemarker() {
  if (this.textContent === '') {
    this.textContent = 'x';

  }else if (this.textContent === 'x') {
    this.textContent = 'o';

  }else {
    this.textContent = '';
  }

}


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changemarker)
}



//For loop to add event listener to all the squares
