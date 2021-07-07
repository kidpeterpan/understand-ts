enum Role {
    ADMIN,READ_ONLY   
}

const person = {
    name: 'Deku',
    age: '14',
    hobbies: ['Sports','Cooking'], // type infer is []string
    role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
   console.log("unlock admin menu!") 
}