function processing(){
    console.log('Processing nature data 1...');
}

function process2(){
    console.log('Processing nature data 2...');
}

console.log('Program starts');

//wait 2 seconds
x= setTimeout(processing,2000);

setTimeout(process2,1000);

console.log('Program ends');