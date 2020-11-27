
// export default Persons ;

class Persons {

    constructor(name , gender , age) {
        this.name = name ;
        this.gender = gender ;
        this.age = age;
    }

    hobby(ho) {
        console.log(`My name is ${this.name} and my hobby is : ${ho} `);
    }
    print() {
        console.log(`My name is : ${this.name} and my age is ${this.age} and i'm ${this.gender}`);
    }

}

export default Persons;