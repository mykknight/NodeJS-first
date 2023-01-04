// console.log("Hello from the node");

// const fs = require('fs');

// fs.writeFileSync('hello.txt', 'Hello again node.js');

// const prdt = (a,b) => a*b;

// console.log(prdt(4,5));

const Student = {
    name: 'Mayank',
    age: 23,
    stream: 'IT',

    details() {
        return "name is "+this.name+" Age is "+this.age+" stream is "+this.stream;
    }
};

const prtnm = ({ name }) => {
    console.log(name);
}
prtnm(Student);

const {name,age} = Student;
console.log(name,age);

// console.log(Student.details());

// const arr = ['apple','orange','','mango','','lemon'];
// //console.log(arr);

// console.log(arr.map(fruits => {
//     if(fruits=='') return 'empty string';
//     else return fruits;
// }));

// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 == obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }

// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}



// console.log(obj1)

// console.log(obj2)

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// 	const { key1, key3}  = { ...obj1}
//     console.log(key1, key3)

    // const arr1 = ['value1', 'value2']

	// const [ val1, val2 ] = arr1



	// console.log(val1)

	// console.log(val2)

    const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

	let { key1, key3}  = obj1

	

	key1 = 20;

	key3 = 123

	console.log(obj1.key1, obj1.key3)