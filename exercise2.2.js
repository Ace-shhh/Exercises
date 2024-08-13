const input = [
    ["-", "X", "X", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "X", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "X"]
  ];

  function bombCounter() {
    let bombs = 0;
    for(let i = 0; i < input.length; i++){
        for(let j = 0; j < input[i].length ; j++){
            switch(input[i][j]){
                case 'X' :
                   bombs = bombs + 1;
                    break;
                case '-' :
                    continue;
            }
        }

    }
    return bombs;
  };

  bombCounter();
  
  console.log(bombs);