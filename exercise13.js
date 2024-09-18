/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let k = 0;
    let j = 0;

    for(let i = 0; i < s.length; i++){
        for(j ; j < t.length; j++){
            if(s[i] === t[j]){
                k++;
                j += 1;
                break;
            }
        }
    }
    return k === s.length;
};