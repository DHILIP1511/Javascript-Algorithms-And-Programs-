const arr = [5,5,5,1,6,1,1,3,1,3,6];
let tempArr =[];
let tempVar=0;
arr.forEach((item,index)=>{
if (index===null) {
      tempArr.push(item);
} else{
tempArr.push(tempVar===1?0
      :tempVar===6?item*2
      :item); // nested trenary op
}
tempVar = item;
});
console.log(tempArr.reduce((acc,val)=>acc+val));

// forEach - each element of array, beter than for loop
// function(),operation,conditions.
// foreach((item,index)=>{})
// !- false, opposit.