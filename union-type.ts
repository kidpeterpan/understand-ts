type Combine = number | string;
// union types
function combine(x: Combine, y: Combine) {
    if (typeof x === 'number' && typeof y === 'number'){
        return x + y
    } else {
        return x.toString() + y.toString()
    }
}

const combineNumber = combine(2,3)
console.log(combineNumber)

const combineString = combine("He","llo")
console.log(combineString)