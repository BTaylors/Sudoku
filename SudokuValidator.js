// // puzzle board examples

// // let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
// //               [ 2,7,1,   9,6,3,   4,8,5 ],
// //               [ 4,6,3,   5,8,1,   7,9,2 ],

// //               [ 9,3,4,   6,1,7,   2,5,8 ],
// //               [ 5,1,7,   2,3,8,   9,6,4 ],
// //               [ 6,8,2,   4,5,9,   3,7,1 ],

// //               [ 1,5,9,   8,7,4,   6,2,3 ],
// //               [ 7,4,6,   3,2,5,   8,1,9 ],
// //               [ 3,2,8,   1,9,6,   5,4,7 ]];


    let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];
// sudokuIsValid(puzzle);
// // => true

// let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
//               [ 8,7,1,9,6,3,4,8,5 ],
//               [ 4,6,3,5,8,1,7,9,2 ],
//               [ 9,3,4,6,1,7,2,5,8 ],
//               [ 5,1,7,2,3,8,9,6,4 ],
//               [ 6,8,2,4,5,9,3,7,1 ],
//               [ 1,5,9,8,7,4,6,2,3 ],
//               [ 7,4,6,3,2,5,8,1,9 ],
//               [ 3,2,8,1,9,6,5,4,7 ]];


//  function for rows
function getRow(puzzle, row) {
return puzzle[row];
        }
    
//function for columns
function getColumn(puzzle, column) {
    let columnArr = [];
    
    for (let i = 0; i < puzzle.length; i++) {
        columnArr.push(puzzle[i][column]);
        }
    
    return columnArr;
        }

// function for 3x3 sections

    function getSection(puzzle, x, y) {
    x *= 3;
    y *= 3;
    let section = [];
        
    for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
    section.push(puzzle[i][j]);
    }
    }
        return section;
            }

// function so that numbers 1-9 are included with no repeats.
function includes1to9(arr) {
for (let i = 1; i <= arr.length; i++) {
    if (arr.indexOf(i) === -1) {
    return false;
        }
        }
    
    return true;
        }

// //function for entire puzzle

    function sudokuIsValid(puzzle) {
    let check = [];

        for(let i = 0; i < 9; i++) {
            check.push(getRow(puzzle, i));
                check.push(getColumn(puzzle, i));
                }
              
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
            check.push(getSection(puzzle, i, j));
        }
                }
    
    for(let i = 0; i < check.length; i++) {
        if(!includes1to9(check[i])) 
     {return false; }
        }
        
     return true;
    }




// // sudokuIsValid(p8zzle);
sudokuIsValid(puzzle);


// Can't figure out why my code won't return true or false.
