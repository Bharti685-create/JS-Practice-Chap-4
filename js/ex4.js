// multiplication table

//let number = prompt("Enter a number of your choice")
//let multiplication = 0
//for (let i = 1; i <=10; i++ ){
  //let result = i * number;
  //console.log(`${number} * ${i} = ${result}`)  
//}// first part of the question


let number = Number(prompt("Enter a number of your choice"));
let table = [1,2,3,4,5,6,7,8,9];
if (number <10){
  console.log(`${table.map(x => x * number)}`);
} else {
  console.log("Try again with a number less than 10")

};// second part of the question
