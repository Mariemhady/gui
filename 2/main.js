var obj = {
    '10' : 'string',
    10 : 'number',
    name : 'ahmed', 
    age : 25 
    
}


var myMap = new Map();


myMap.set('name','ahmed');
myMap.set('age','25');
myMap.set(10 , 'number');
myMap.set('10' , 'string');

console.log(obj);
console.log(myMap);


// methods 
 
console.log("--- Map Methods --- ");

console.log("Get Values  : " + myMap.get('name'));

console.log("Has ?  : " + myMap.has('name'));

console.log("Size  : " + myMap.size);


console.log("Delete  : " + myMap.delete('age'));
console.log("After Deleting : " );
console.log(myMap);

console.log("Clear  : " + myMap.clear());
console.log("After Clearing : " );
console.log(myMap);


