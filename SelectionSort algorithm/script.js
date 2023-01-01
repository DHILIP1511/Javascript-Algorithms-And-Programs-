myFunction = () => {
  const arr1 = document.getElementById("usrArr").value;
  const splitInput = arr1.split(",");
  let outputArray = selectionSort(splitInput);
  document.getElementById("para").innerHTML = outputArray;
};
selectionSort = (arr1) => {
      let arr = arr1.map(Number);
  for (let i = 0; i < arr.length; i++) {
    let lowestVal = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestVal]) {
        lowestVal = j;
      }
    }
    if (lowestVal !== i) {
      [arr[i], arr[lowestVal]] = [arr[lowestVal], arr[i]];
    }
  }
  return arr;
};

const btn = document
  .getElementById("btn")
  .addEventListener("click", myFunction);

