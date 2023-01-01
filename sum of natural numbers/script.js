
 clicktoSum=()=>{
      let value1 = Number(
        document.getElementById("input1").value
      );
      let value2 = Number(
        document.getElementById("input2").value
      );
      if (value1 < value2) {
        let sum = 0;
        for (let i = value1; i <= value2; i++) {
          sum += i;
        }
        document.getElementById("displaySum").innerHTML = sum;
      } else {
        document.getElementById("displaySum").innerHTML =
          "Input1 is greater than input2 please enter correctly";
      }
}

// let array=[5,5,5,1,6,1,3,1,3,6]
// for (let i = 0; i < array; i++) {
//   for (let j = 0; j < i; j++) {
//     if (j[i+1]===1) {
//       j[i+1]*=0
//     }
//     else(j[i===6]){
      
//     }
    
//   }
// }
const array = [5, 5, 5, 1, 6, 1,1, 3, 1, 3, 6]; // 2 for 
const tempArray= [];
for (let i = 0; i < array.length-1; i++) {
  debugger;
  if(array[i]!==6&&array[i]!==1){
tempArray.push(array[i]);
  }
   if(array[i]==1){
    array[i]= 0*array[i+1];
tempArray.push(0*array[i+1]);
  }
  else if(array[i]==6){
    array[i] = 2* array[i + 1];

tempArray.push(2 * array[i + 1]);
  }
}
// reduce - big array to small array 
// [1,2,3,4,5,6] = 21 acc 1+2+3+4+5+6, val =21
// [21]
// acc,value
const returnArray = tempArray.reduce((acc,val)=> acc+val);
console.log(returnArray);
console.log(array);
console.log(tempArray);




