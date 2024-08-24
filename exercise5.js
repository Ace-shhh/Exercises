/**
 * @param {string[]} words
 * @return {string[]}
 */

var commonChars = function(words) {
    const splittedWords = [];
    const match = [];
    let toDelete = [];
    //split the words into characters array and store in splittedWords array
    words.forEach((word)=>{
        split = word.split("");
        splittedWords.push(split);
    })
    if(splittedWords.length >= 2){
    //compare first and second splitted words array
    splittedWords[0].forEach((char)=>{
        const result = splittedWords[1].indexOf(char);
        if(result !== -1){
            match.push(char)
            splittedWords[1].splice(result, 1)
        }
    })
    //compare matched result to the rest of the values
    for (i = 2; i < splittedWords.length; i++){
        match.forEach((char)=>{
            const result = splittedWords[i].indexOf(char);
            if (result !== -1){
                splittedWords[i].splice(result, 1);
            }else if(result === -1){
                toDelete.push(char);
            }   
            
        })
        toDelete.forEach((char)=>{
            const del = match.indexOf(char);
            match.splice(del, 1)
            toDelete = []
        })
    }
    return match;
    }else{
        return splittedWords[0];
    }
};