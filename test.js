const words = ["bella", "label"];
const obj= {}
let match = [];
    function commonChars(){
        words.forEach((word, wordIdx)=>{
            let split = word.split("");
            obj[word] = split;
            
            words.forEach((secondWord)=>{
                if (word != secondWord){

                    obj[word].foreach((char)=>{
                        if (char === secondWord){
                            match.push(char)
                        }
                    })
                }
            })
        })
        
       return match;
    }
commonChars();