import {Persons} from './person.js';

let Persons = new Persons();
class Person extends Persons {

    constructor(name , gender , age, city) {
        super(name , gender , age);
        this.city = city;
    }
    
}


let per = new Person('osama' , 'male' , '23','cairo');

console.log(per.name);
console.log(per.city);
per.hobby('Reading');
console.log(per.print());

