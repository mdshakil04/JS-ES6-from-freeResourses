// Ternary operator
//  condition ? if condition is true this part will execute : else this will execute
//  let type = (age >= 18) ? 'adult' : 'child'
let age = 24;
// let type = (age >= 18) ? 'adult' : 'child'
let type = (age >= 25) ? 'YoungMan' : (age >=18) ? 'Adult' : 'Child'
console.log(type);