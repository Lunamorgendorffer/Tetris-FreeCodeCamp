const grid= document.querySelector('.grid')
const width = 10;
const height = 20;

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