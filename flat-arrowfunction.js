// console.log('Welcome to JS ES6')
// let number = (a, b) => a + b; 
// --------------OR----------------------
    let number = (a , b) => {
        return a + b;
    }
// console.log(number(10, 5))
let javaScript = {
    name: 'JavaScript',
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function (){
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`))
    }
}
javaScript.printLibraries()