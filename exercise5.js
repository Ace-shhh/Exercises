/**
 * @param {string[]} words
 * @return {string[]}
 */

var commonChars = function(words) {
    const splittedWords = [];
    let match = [];
    const result = [];
    //break down the words to characters
    words.forEach((word)=>{
        splittedWords.push(word.split(""))
    });
    //get the matching characters of arr 0 and 1
    splittedWords[0].forEach((firstChar, fIdx)=>{
        splittedWords[1].forEach((secondChar, sIdx)=>{
            if (firstChar === secondChar){
                match.push(firstChar);
                splittedWords[1].splice(sIdx, 1);
            }
        })
    })
    //compare the matched result to the rest of the values

    for (i = 2; i < splittedWords.length; i++){
        splittedWords[i].forEach((char)=>{
            match.forEach((matchChar, mIdx)=>{
                if(matchChar === char){
                    result.push(char);
                    match.splice(mIdx, 1);
                }
            })
        })
        match = result;
    }
    return match;
};