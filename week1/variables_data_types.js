// var total = 0;
// console.log(total);


// total = 10;

// console.log(total)


// total=1000.69;
// console.log(total);


//variable naming conventions
// var name="John";
// var name1="Tom";
// //var 0name="Tom"; //invalid - cannot start with a number
// var na0me="Tom"; //valid
// var name_0="Tom"; //valid only special character allowed is underscore
// //var name@0="Tom"; //invalid - cannot use @
// //var first name="Tom"; //invalid - cannot use space
// var first_name="Tom"; //valid
// var firstName="Tom"; //valid
// var firstname="Tom"; //valid

// var Name="Tom"; //valid but not recommended
// var _name="Tom" //valid but not recommended



//data types
//string
//integer
//float
//boolean
//undefined
//null

//string
// var name="John";
// console.log(name);

var text='A';
text="Hello";
console.log(text);

text="Hello world";
text="This is a sentence";
text="acd@gmail.com sent you a message";

console.log(text);

console.log(typeof(text));


//integer - whole numbers
var age=20;
console.log(typeof(age));

console.log(age);

age=330;
console.log(age);

let num=0;
num=-100;
num=-67578908765;
num=45678908;


//floating - decimal numbers
var price=10.99;

price=-100.40;
price=0.5000000000000; //doesnt store trailing zeros

console.log(price);


//boolean - true or false
var married=false;
console.log(married);

married=true;
console.log(married);

console.log(typeof(married));


//undefined - variable is declared but not assigned a value
var name;
console.log(name); //undefined

name=null;
console.log(name); //null


//string formatting
var name="Paul";
var age=20;
var married=false;

// var text="My name is "+name+" and I am "+age+" years old. Am I married? "+married;
// console.log(text);

var text=`My name is ${name} and I am ${age} years old.  Am I married? ${married}`;
console.log(text);