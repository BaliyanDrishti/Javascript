// calculate avg marks
// 01-59 -> F
// 60-69 -> D
// 70-79 -> C
// 80-89 -> B
//90-100 -> A

const marks = [90, 90, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks){
    let sum=0;
    let count=0;
    for (let i in marks){
        sum = sum+i;
        count++;
    } 
    console.log(count);  
    let avg= sum/count;
    switch(avg){
        case '1':
            if(avg>=1 && avg<60)
                return("F");
        case '2':
            if(avg>=60 && avg<70)
                return("D");
        case '3':
            if(avg>=70 && avg<80)
                return("C");
        case '4':
            if(avg>=80 && avg<90)
                return("B");
        case '5':
            if(avg>=90 && avg<=100)
                return("A");
        default:
            return("Enter correct input");

    }
//    if(avg>=1 && avg<60)
//        return("F");
//    else if(avg>=60 && avg<70)
//        return("D");
//    else if(avg>=70 && avg<80)
//        return("C");
//    else if(avg>=80 && avg<90)
//        return("B");
//    else if(avg>=90 && avg<=100)
//        return("A");
}
