const x = 10;

function isPalindrome(){
    //create a string version of x
    const xAsString = x.toString();
    //start i at 0
    let i = 0;
    //check if x is === to reversed x
    for(j = xAsString.length -1 ;  j >= 0 ; j--){
        if(xAsString.charAt(j) === xAsString.charAt(i)){
         i++   
        }else{
            return false;
        }
    }
    return true;
}
isPalindrome()