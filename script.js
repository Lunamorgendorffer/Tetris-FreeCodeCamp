const grid= document.querySelector('.grid')
let squares = array.from(grid.querySelectorAll('div'))
const width = 10;
const height = 20;
let currentPosition = 4;

// tetrominoes 
const lTetromino =[
    [1 , width+1 , width*2+1, 2],
    [width,width+1,width+2,width*2+2],
    [1 , width+1 , width*2+1, width*2],
    [width,width*2,width+2+1,width*2+2]
    
];

const zTetromino =[
    [1 , width+1 , width*2+1, 2],
    [width,width+1,width+2,width*2+2],
    [1 , width+1 , width*2+1, width*2],
    [width,width*2,width+2+1,width*2+2]
    
];
const tTetromino =[
    [1 , width+1 , width*2+1, 2],
    [width,width+1,width+2,width*2+2],
    [1 , width+1 , width*2+1, width*2],
    [width,width*2,width+2+1,width*2+2]
    
];
const oTetromino =[
    [1 , width+1 , width*2+1, 2],
    [width,width+1,width+2,width*2+2],
    [1 , width+1 , width*2+1, width*2],
    [width,width*2,width+2+1,width*2+2]
    
];
const iTetromino =[
    [1 , width+1 , width*2+1, 2],
    [width,width+1,width+2,width*2+2],
    [1 , width+1 , width*2+1, width*2],
    [width,width*2,width+2+1,width*2+2]
    
];


const theTetrominoes = [ lTetromino,zTetromino,tTetromino,oTetromino,iTetromino,];

//Randomly select Tetromino
let random = Math.floor(Math.random()*theTetrominoes.length);
let currentRotation= 0;
let current = theTetrominoes[random][currentRotation]

//draw the shape
function draw(){
    current.forEach (index =>{
        squares[currentPosition + index].classList.add('block')
    })

}

//undraw the Tetromino
function undraw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('block')
    })
}

//move down function
function moveDown() {
    undraw()
    currentPosition= currentPosition += width
    draw()
    freeze()
}

//move the tetromino right, unless is at the edge or there is a blockage
function moveRight() {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
    if(!isAtRightEdge) currentPosition += 1
    if(current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
      currentPosition -=1
    }
    draw()
}



