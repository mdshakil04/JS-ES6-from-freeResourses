class Person {
    constructor(name, age, hobby, occupation){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
        this.occupation = occupation;
    }
}

const person1 = new Person ('Shakil', '34', 'Traveling', 'Teacher');
console.log(person1)

class AnotherPerson extends Person{
    constructor(name, age, hobby, occupation, vision, mission){
        super(name, age, hobby, occupation);
        this.vision = vision;
        this.mission = mission;
    }
}
const person2 = new AnotherPerson('Zahid', 36, 'Gardening', 'Unemployed', 'Programmer', 'Overcome Lazyness');
console.log(person2)