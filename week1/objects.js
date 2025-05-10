tom = new Object(); //tom is the object name

// //defining object properties
// tom.name = "Tom";
// tom.age = 25;
// tom.address = "456 Elm St, City, Country";
// tom.phone = "987-654-3210";

// //defining object methods
// tom.sayHello = function (){ //anonymous function - no name
//     console.log("Hello, my name is " + this.name);
// }
// tom.eval= function (num1,num2){
//     let total=num1+num2;
//     let avg=total/2;
//     return avg; //returning the value is optional
// }

// // console.log(tom);

// tom.sayHello(); //call the function

// result=tom.eval(10,20); //function call
// console.log(result);



class Person{
    constructor(name,age,address,phone){
        this.name=name;
        this.age=age;
        this.address=address;
        this.phone=phone;
    }

    sayHello(){
        console.log("Hello, my name is " + this.name);
    }
    eval(num1,num2){
        let total=num1+num2;
        let avg=total/2;
        return avg; //returning the value is optional
    }
}

tom=new Person("Tom",20,"123 Main St, City, Country","123-456-7890"); //create object of type Person

tom.sayHello(); //call the object method
console.log(tom.eval(30,20));


eric=new Person("Eric",25,"456 Elm St, City, Country","987-654-3210"); //create object of type Person
eric.sayHello(); //call the object method

console.log(tom.name)

console.log(tom);