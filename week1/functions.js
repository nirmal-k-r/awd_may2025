//function definition
// function sayHello(){
//     console.log("Hello World");
// }


// sayHello()//function call


// console.log('test testing');
//  x=2-2+2;
// console.log(x);

// sayHello();

// name='test';

// function average(num1,num2){ //function with 2 parameters
//     let total=num1+num2;
//     let avg=total/2;
//     return avg; //returning the value is optional
// }

// var result=average(10,20); //function call

// console.log(result); 


// console.log(average(100,200));
// console.log(average(1000,4000)); //extra parameter



function register(name,dob,address,age=0){
    console.log("Name: ",name);
    console.log("DOB: ",dob);
    console.log("Address: ",address);
    console.log("Age: ",age);
}

register("John Doe","01/01/2000","123 Main St, City, Country");
register("Jane Doe","01/01/2000","123 Main St, City, Country");
register("John Smith","01/01/2000","123 Main St, City, Country");
register("Jane Smith","01/01/2000","123 Main St, City, Country",20);