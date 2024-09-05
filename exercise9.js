const startingGrid = [
    [' ', ' ', ' '],
    [' ', '$', ' '],
    [' ', ' ', ' '],
  ];

function createGame (startingGrid){
    let grid = startingGrid;
    let array
    let index
    //find player
    for(let i = 0; i < grid.length; i++){
        let playerIdx = grid[i].indexOf('$')
        if(playerIdx !== -1){
            array = i
            index = playerIdx
        }
    }

    return {
        up : function(){
            if(array > 0){
                grid[array].splice(index, 1, " ");
                const newArray = array - 1;
                grid[newArray].splice(index, 1, "$");
                array = newArray
            };
            console.log(grid);
        },
        down : function(){
            if(array < grid.length - 1){
                grid[array].splice(index, 1, " ");
                const newArray = array + 1;
                grid[newArray].splice(index, 1, "$");
                array = newArray;
            };
            console.log(grid);
        },
        right: function(){
            if(index < grid[array].length - 1){
                grid[array].splice(index, 1, " ");
                const newIndex = index + 1;
                grid[array].splice(newIndex, 1, "$");
                index = newIndex;
            };
            console.log(grid);
        },
        left: function(){
            if(index > 0){
                grid[array].splice(index, 1, " ");
                const newIndex = index - 1;
                grid[array].splice(newIndex, 1, "$");
                index = newIndex;
                console.log(grid)
            }
        }

    }
}
const game = createGame(startingGrid);
game.left()
game.down()
game.right()
game.right()
game.right()
game.right()
