const scores = [100 ,99, 90, 85 , 78, 68, -1, 110 ];
function calcGrades(){
let grade = ""
let fieldarr = []
    for(let i = 0; i < scores.length; i++){
        if(scores[i] == 100){
          grade = "A+";
          fieldarr.push({score : scores[i], letterGrade : grade});
        } else if(scores[i] >= 90 && scores[i] <= 99){
          grade = "A";
          fieldarr.push({score : scores[i], letterGrade : grade});
        } else if(scores[i] >= 80 && scores[i] <= 89) {
          grade = "B";
          fieldarr.push({score : scores[i], letterGrade : grade});
        } else if(scores[i] >= 70 && scores[i] <= 79){
          grade = "C";
          fieldarr.push({score : scores[i], letterGrade : grade});
        } else if(scores[i] >= 0 && scores[i] <= 69){
          grade = "F";
          fieldarr.push({score : scores[i], letterGrade : grade});
        } else{continue;}
    }

    return fieldarr;
}

calcGrades();