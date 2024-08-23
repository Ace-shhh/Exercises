const words = ["bella", "label"];
const obj= {}
let match = [];
    function commonChars(){
        words.forEach((word, wordIdx)=>{
            let split = word.split("");
            obj[word] = split;
            console.log(obj[word]) 
        })
       
       
    }
commonChars();