function add (x: number, y :number) :number { // return type can be omit
   return x + y 
}

let result = add(2,1)
console.log(result)

let combineValues: (x:number, y:number) => number; // if not specific ts saw that is type any!
combineValues = add
result = combineValues(2,1)
console.log(result)

function addAndHandle(x:number,y:number,cb: (num:number) => void) {
   const  result = x + y;
   cb(result);
}

addAndHandle(1,2,(n: number) => {
   console.log(n)
})