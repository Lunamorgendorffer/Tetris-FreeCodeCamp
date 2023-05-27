document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.querySelector('button')
    const grid= document.querySelector('.grid')
    const scoreDisplay= document.querySelector('.score-display')
    const linesDisplay= document.querySelector('.line-display')
    const displaySquares = document.querySelector('.previous-grid div')
    let squares = Array.from(grid.querySelectorAll('div'))
    const width = 10;
    const height = 20;
    let currentPosition = 4;
    let timerId
    let score = 0;
    let lines = 0;

    
    //assign functions to keyCodes
    function control(e) {
    if(e.keyCode === 39) {
      moveRight()
    } else if (e.keyCode === 38) {
      rotate()
    } else if (e.keyCode === 37) {
      moveLeft()
    } else if (e.keyCode === 40) {
      moveDown()
    }
    }
    document.addEventListener('keyup', control)
    
    //The Tetrominoes
    const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
    ]
    
    const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
    ]
    
    const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
    ]
    
    const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
    ]
    
    const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
    ]
    
    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
    
    
    //Randomly select Tetromino
    let random = Math.floor(Math.random()*theTetrominoes.length);
    let currentRotation= 0;
    let current = theTetrominoes[random][currentRotation];
    
    //draw the shape
    function draw(){
    current.forEach (index =>{
        squares[currentPosition + index].classList.add('block');
    })
    
    }
    
    //undraw the Tetromino
    function undraw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('block');
    })
    }
    
    //move down function
    function moveDown() {
    undraw();
    currentPosition= currentPosition += width;
    draw();
    freeze();
    }
    
    //move the tetromino right, unless is at the edge or there is a blockage
    function moveRight() {
    undraw();
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1);
    if(!isAtRightEdge) currentPosition += 1;
    if(current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
      currentPosition -=1;
    }
    draw();
    }
    
    //move the tetromino left, 
    function moveLeft() {
    undraw();
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
    if(!isAtLeftEdge) currentPosition -=1;
    if(current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
      currentPosition +=1;
    }
    draw()
    }
    
    //rotate the tetromino
    function rotate() {
    undraw();
    currentRotation ++;
    if(currentRotation === current.length) { 
      currentRotation = 0;
    }
    current = theTetrominoes[random][currentRotation]
    draw();
    }

     //show up-next tetromino in mini-grid display
    const displayWidth = 4
    const displayIndex = 0
    let nextRandom = 0

    const smallTetrominoes = [
        [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
        [0, displayWidth, displayWidth+1, displayWidth*2+1], //zTetromino
        [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
        [0, 1, displayWidth, displayWidth+1], //oTetromino
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
    ]

    function displayShape(){
        displaySquares.forEach(square => {
            square.classList.remove('block')
        })
        smallTetrominoes[nextRandom].forEach( index => {
            displaySquares[displayIndex + index].classList.add('block')
            
        })
    }

     //freeze function
    function freeze() {
        if(current.some(index => squares[currentPosition + index + width].classList.contains('block3') || 
        squares[currentPosition + index + width].classList.contains('block2') )) {
            current.forEach(index => squares[currentPosition + index].classList.add('block2'))
            random = nextRandom
            nextRandom = Math.floor(Math.random() * theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
            displayShape()
            gameOver()
        }
    }

    startBtn.addEventListener('click', () =>{
        if(timerId){
            clearInterval(timerId)
            timerId = null
        } else{
            draw ()
            timerId = setInterval(moveDown, 1000)
            nextRandom = Math.floor(Math.random()*theTetrominoes.length)
            displayShape()
        }
    })

    //game over
    function gameOver() {
        if(current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
            scoreDisplay.innerHTML = 'end'
            clearInterval(timerId)
        }
    }


})





