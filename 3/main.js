
let symb =  Symbol();


let obj = {

    name : 'osama',
    age : '23',
    [symb] : 'U cant see this texr'
}

console.log(obj.name);
console.log(obj.age);
console.log(obj.symb);

//

let sym2 = Symbol('hi')
let sym3 = Symbol('hi')

console.log(Symbol('hi') === Symbol('hi')) ; // false

//

let sym4 =Symbol.for('hello');

console.log(sym4.toString());
console.log(sym4);