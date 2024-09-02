const word1 = "helloworld";
const word2 = "asloworldaf";


function longestSubstring(){

    //convert word1 & word2 to array
    const word1Arr = word1.split('');
    const word2Arr = word2.split('');
    let word1Sub = [];
    let word2Sub= [];

    //get every substring in word1
    for(let i = 0; i <= word1Arr.length; i++){
        for(let j = 0; j <= word1Arr.length; j++){
            if(i !== j){
                word1Sub.push(word1.substring(j, i))
            }
        }
    }
    //get every substring in word2
    for(let i = 0; i <= word2Arr.length; i++){
        for(let j = 0; j <= word2Arr.length; j++){
            if(i !== j){
                word2Sub.push(word2.substring(i, j))
            }
        }
    }

    //find matching substring
    const substringMatch = [];
    word1Sub.forEach((substring)=>{
        const match = word2Sub.indexOf(substring);
        if (match !== -1){
            substringMatch.push(substring);
        }
    })
    
    //find the longest common
    let longestComSubIdx = 0;
    for(let i = 0; i < substringMatch.length; i++){
        if(substringMatch[i].length > substringMatch[longestComSubIdx].length){
            longestComSubIdx = i;
        }
    }
    console.log(substringMatch[longestComSubIdx])
    return substringMatch[longestComSubIdx];
}

longestSubstring(word1, word2)