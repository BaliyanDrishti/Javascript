let marks = {
    Aryan: 56,
    abhi: 78,
    Miky: 29,
    Akshaj: 33
}

// for( let i=0; i<Object.keys(marks).length;i++){
//     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// }

for( let i in marks){
    console.log(i + ' ' + marks[i]);
}
