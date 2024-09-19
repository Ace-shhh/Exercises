const s = "aabb"


function firstUniqChar(s) {
    let i = 0;
    let k = 0;
    while(i < s.length){
        if(s[k] === s[i] && k !== i){
            k++;
            i = 0;
        }else{
            i++;
        }
        
    }
    console.log((k !== s.length ? k : -1)) ;
};

firstUniqChar(s)