"use strict";

var findIt = (grid) => {
    var gridSize = {
        x: grid[0].length,
        y: grid.length
    }

    //go through each row and see if we find the '1'
    var xLocation = null;
    var yLocation = null;
    for (yLocation = 0; yLocation < gridSize.y; yLocation++ ) {
        xLocation = grid[yLocation].indexOf(1) >= 0 ? grid[yLocation].indexOf(1) : null;
        //break out earlier if we've found it already
        if (xLocation !== null) {
            break;
        }
    }

    //recalculate yLocation from bottom
    var yLocationFromBottom = gridSize.y - yLocation;
    return ([xLocation, yLocationFromBottom]);
}

//location [2, 0]
var testGrid1 = [[0, 0, 0],
                 [0, 0, 0],
                 [0, 0, 1]];

//location[1,1]
var testGrid2 = [[0, 0, 0, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]];

//location [3, 4];
var testGrid3 = [[0, 0, 0, 0, 0],
                 [0, 0, 0, 1, 0],
                 [0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0]
             ];

console.log(findIt(testGrid1));
console.log(findIt(testGrid2));
console.log(findIt(testGrid3));
