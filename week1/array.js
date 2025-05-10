// var marks=[]; //empty array
// console.log(marks); //prints empty array


// marks=[10,20,30,40,50]
// console.log(marks); //prints array with 5 elements


// // console.log(marks[0]); //prints first element of array
// // console.log(marks[1]); //prints second element of array
// // console.log(marks[2]); //prints third element of array
// // console.log(marks[3]); //prints fourth element of array
// // console.log(marks[4]); //prints fifth element of array


marks=[100,40,50,39,46];
// console.log(marks[2]);

// //prin t last elemeent
// console.log(marks[4]); //prints last element of array

// console.log(marks.length); //prints length of array

// console.log(marks[marks.length-1]); //prints last element of array


// //first element
// console.log(marks[0]); //prints first element of array


// marks=[50,10,20,40,60];
// console.log(marks[-2]); //negative indexing - circular - works in python

// marks=[100,40,50,39,46];

// selected_marks=marks.splice(0,3);
// console.log(marks); //prints array with 5 elements
// console.log(selected_marks); //prints array with 5 elements


// marks=[100,40,50,39,46];

// for (mark of marks){
//     console.log(mark);
// }


// overtime_hours=[10,20,30,40,50];
// base_salary=35000;
// for (hours of overtime_hours){
//     final_salary=base_salary+(hours*300);
//     console.log(final_salary);
// }


// names=[];

// console.log(names[3]); 

// names.push("John"); //append to array
// names.push("Jane");

// console.log(names);

// names.push("Doe");
// names.push("Smith");
// names.push("Alice");

// console.log(names);

// console.log(names[3]);

// //array uses LIFO concept (last in first out)

// names.pop(); //remove last element
// console.log(names);

// names.pop(); //remove last element
// console.log(names);



// names=["John","Jane","Doe","Smith","Alice"];

// console.log(names);

// names[2]="Bob"; //update element - overwrite
// console.log(names);

names=["John","Jane","Doe","Smith","Alice"];
ages=[20,30,40,50,60];


for (var i=0; i<names.length; i++){
    console.log(`Name: ${names[i]}, Age: ${ages[i]}`);
}
