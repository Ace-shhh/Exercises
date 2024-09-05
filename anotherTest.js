const num = 5
function count (initialvalue){
    let num = initialvalue; 
    let doSomething = {
        add1: function(){
            num = num + 1
            return num
        },
        sub1: function(){
            num = num - 1
            return num
        }
    }
    
}

const counter = count(num);
console.log(counter.add1());
console.log(counter.add1());
console.log(counter.add1());
console.log(counter.sub1());