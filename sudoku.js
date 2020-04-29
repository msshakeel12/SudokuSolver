const puzzle =[[8,0,2,7,0,0,4,0,0],
            [0,1,0,0,0,9,0,0,5],
            [0,4,0,0,8,0,2,0,0],
            [0,0,0,0,5,0,9,2,0],
            [0,0,0,8,0,7,0,0,6],
            [7,0,9,0,6,0,0,5,0],
            [0,0,3,0,0,5,7,0,9],
            [6,0,0,0,1,0,3,0,0],
            [4,0,0,2,0,0,0,0,8]];

let unsolved = JSON.parse(JSON.stringify(puzzle)); 

//sudokusolver(puzzle);
//unsolvedsudoku(unsolved); 
///

let num="jf";
const  fill=[];
window.onload=function buildpage() {    
    var html = "";
    for (var i = 0 ; i < 9 ; i++) {
         num+=i;
     for (var j = 0 ; j < 9 ; j++){ 
         html = "";
         if (unsolved[i][j]===0){
            unsolved[i][j]=" ";
        }
        html +=unsolved[i][j] ;
        num+=j;
        let langDiv = document.getElementById(num);
        langDiv.innerHTML = html;
        num="jf"+i;
        }
        num="jf";
    }
    
    
}

buildpage();




        



var counter=0;


async function sudokusolver(){
    var nonPoss={};
    var impossnum;
        let solved=true;
    for (var row=0; row<9; row++){
        for(var col=0; col<9; col++){
            if (puzzle[row][col]===0){
                nonPoss={};
                for(var i = 0; i < 9; i++){
                    if(puzzle[row][i]>0)
                        nonPoss[puzzle[row][i]]=true;
                    if(puzzle[i][col]>0)
                        nonPoss[puzzle[i][col]]=true;
                }
                for (var rowbox=Math.floor(row/3)*3; rowbox< Math.floor(row/3)*3+3;rowbox++)
                    for (var colbox=Math.floor(col/3)*3; colbox< Math.floor(col/3)*3+3;colbox++)
                    if(puzzle[rowbox][colbox])
                        nonPoss[puzzle[rowbox][colbox]]=true;
                    impossnum=Object.keys(nonPoss);
                    if(impossnum.length===8)
                        for(var i=1;i<10; i++)
                            if(impossnum.indexOf(''+i)<0){
                                puzzle[row][col]=i;  
                                setTimeout( animation,500*i,row,col);
                                var x=(row*10)+col;
                                console.log(x);
                                fill.push(x);
                        
                            }
                            else 
                                solved=false;
            }
        }
    } 
        if(solved)
           return; 

        sudokusolver();

    

}

 

async function animation(row,col){
    num="jf";
    num+=row;
    num+=col;
    var html="";
    html+=puzzle[row][col];
    let langDiv = document.getElementById(num);
    langDiv.innerHTML = html;
    document.getElementById(num).className = "solved";
     

}


