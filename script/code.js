
// let marks = document.getElementById('Enter').value
// switch (marks){
//     case 100:
//         console.log("A+");
//     break;
//     case 90 >= 99:
//         console.log("A")
//     break;
//     case 80 >= 89:
//         console.log("B+");
//     break;
//     case 70 >= 79:
//         console.log("Distinction")
//     break;
//     case 60 >= 69:
//         console.log("C+")
//     break;
//     case 50 >= 59:
//         console.log("Passed")
//     break;
//     case 50 <= 0:
//         console.log("Failed");
//     break;
// }

let btnSubmit = document.querySelector('[data-submit]')

function displayMarks(){
    let marks = +document.querySelector('[data-marks]').value
    let output= document.querySelector('[data-output]')
    
    switch(true){
        case marks < 50:
            output.textContent = 'Sorry but you failed. Try again next time'
            break;
            case marks <=59:
                output.textContent = 'You passed'
            break;
            case marks <=69:
                output.textContent = 'C+'
            break;
            case marks <=79:
                output.textContent = 'Distinction'
            break;
            case marks <=89:
                output.textContent = 'B+'
            break;
            case marks <=99:
                output.textContent = 'A'
            break;
            case marks ==100:
                output.textContent = 'A+'
            break;
         
        default:
            output.textContent = 'Have not submited'
        break;
    }
}
btnSubmit.addEventListener('click', displayMarks)


//===Loops===//
//for, while, do while, foreach, for in, for off

// for(let i=0; i<=10; i++){
//     console.log(i);
// }

for(let i=0; i<=10; i++){
    if(i % 2==0){
        console.log(i);
    }
}

for(let i=0; i<=10; i++){
    if(i % 2==0)
        console.log(i);
    else
    console.log(`${i} is an odd number`);
}
//ternary operator => ? :
for(let i=0; i<=10; i++){
    console.log(i % 2 == 0 ? `${i} is even` : `${i} is odd`);
}

for (let i=10; i>=0; i--){
    console.log(i);
}

for(let i=0; i<=10; i++){
    console.log(i);
    if(i == 5){
        break
    }
}

for(let i=0; i<=10; i++){
    if(1==5){
        //skip
        continue
    }
    console.log(i);
}

 let numbers = [12, 18, 11, 5, 8, 2];
 console.log(numbers.length);

 for(numbers){
     console.log(i)

 }
 