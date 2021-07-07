// unknown type
// never type
// ---
let userInput: unknown;
// can store any value in userInput with out error
userInput = 5;
userInput = 'Deku'; // can change the type
// แต่ตอนจะเอาไป assign unknown ไม่การันตีว่าตัวเองจะเป็น type ไหน
// ต้องมีการ check type
let userName: string
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(msg: string, code: number) :never { // return type can be omit
    throw { msg , code }
}

generateError('An error occurred!', 500)