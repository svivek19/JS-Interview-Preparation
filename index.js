//call stack

let name = 'Vivek';

function one() {
    console.log('one');
    two() //second
}

function two(){
    console.log('two');
}

one() //first
console.log(name); //third