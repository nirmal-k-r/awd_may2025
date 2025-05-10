// marks=[10,20,30,40,50];

// //dictionary contains key value pairs

// marks={
//     John:10,
//     Jane:20,
//     Doe:30,
//     Smith:40,
//     Alice:50
// }

// //check alice mark

// console.log(marks['Alice']); //read value using key

// //check john mark
// console.log(marks['John']);


// console.log(marks);


// console.log(Object.keys(marks));

// keys=Object.keys(marks);  //extract keys from dictionary
// keys=keys.sort();
// console.log(keys);



// person={
//     name:"John",
//     age:20,
//     address:"123 Main St, City, Country",
//     phone:"123-456-7890",
//     email:"sdkjwdw@dehd.com"
// }

// console.log(person['phone']);

// person['email']="test@john.com";  //update value

// console.log(person);


// console.log(Object.values(person)); //extract values from dictionary


// marks={} //empty dictionary

// marks['english']=10;  //assign value using key
// marks['maths']=20;
// marks['science']=30;
// marks.history=40;  //same as marks['history']

// console.log(marks);

// console.log(marks.maths)


students={
    Alice: {
        age: 20,
        address: "123 Main St, City, Country",
        phone: "123-456-7890"
    },
    Bob: {
        age: 25,
        address: "456 Elm St, City, Country",
        phone: "987-654-3210"
    },
    Charlie: {
        age: 30,
        address: "789 Oak St, City, Country",
        phone: "555-555-5555",
        marks:[100, 90, 80]
    }
}

console.log(students['Bob']);
console.log(students['Bob']['address']);

console.log(students['Charlie']['marks'][1]); //accessing list inside dictionary