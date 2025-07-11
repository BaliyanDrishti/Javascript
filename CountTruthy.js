//Falsy:
// False
// undefined
// null
// ' '
// 0
// NaN

const array =[1,2,3,false,"", 8];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for(let value of array)
    {
        // if (value !== false || value !== undefined || value !== null || value !== "" || value !== 0 || value !== NaN){
            if (value){
                count++;
    }
}
    return count;

}
