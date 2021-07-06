const person = {
    name: 'Deku',
    age: '14',
    hobbies: ['Sports','Cooking'] // type infer is []string
};

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase())
}