const s = "loveleetcode"
function firstUniqChar(s) {
    let seen = {};
    for(let i = 0; i < s.length; i++){
        if(!seen[s[i]]){
            seen[s[i]] = 1;
        }else{
            seen[s[i]] +=1;
        }
    }
    for(i = 0 ; i < s.length ; i++){
        if(seen[s[i]] === 1){
            return i;
        }
    }
    return -1;
}
firstUniqChar(s)