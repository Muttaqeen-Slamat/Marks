
let marks = document.getElementById('Enter').value
switch (marks){
    case 100:
        console.log("A+");
    break;
    case 90 >= 99:
        console.log("A")
    break;
    case 80 >= 89:
        console.log("B+");
    break;
    case 70 >= 79:
        console.log("Distinction")
    break;
    case 60 >= 69:
        console.log("C+")
    break;
    case 50 >= 59:
        console.log("Passed")
    break;
    case 50 <= 0:
        console.log("Failed");
    break;
}
