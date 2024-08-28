const asyncFn1 = async () => { console.log(1); }
const asyncFn2 = async () => {
  return new Promise((resolve) => {
     setTimeout(() => {
        console.log(2)
        resolve()
     }, 2000);
  });
}
const asyncFn3 = async () => {
  return new Promise((resolve) =>{
    setTimeout(()=>{
      console.log(3)
      resolve()
    }, 10000)
  }, )
}
const asyncFn4 = async () => {
  console.log(4)
}

const input = [
  asyncFn1,
  asyncFn2,
  asyncFn3,
  asyncFn4
];


async function executeAll(input){
    for(i = 0; i < input.length; i++){
         await input[i]();
    }
}
executeAll(input)


