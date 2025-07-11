age= verifyAge(19);
console.log(age);

function verifyAge(a){
    if (a>10 && a<20){
        return ("your age lies between 10 and 20");
    }
    else{
        console.log("your age does not lie between 10 and 20");
    }
}

// let age= prompt("what is your age?");
// if(age>10 && age<20){
//     console.log("your age lies between 10 and 20");
// }
// else{
//     console.log("your age does not lie between 10 and 20");
// }
