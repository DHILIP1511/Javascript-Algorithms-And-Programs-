myFunction = () => {
  const arr1 = document.getElementById("usrArr").value;
  const splitInput = arr1.split(",");
  let outputArray = bubbleSort(splitInput);
  document.getElementById("para").innerHTML = outputArray;
};
bubbleSort = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    for (let ind = 0; ind < arr.length - 1; ind++) {
      if (Number(arr[ind]) > Number(arr[ind + 1])) {
        let temp = arr[ind + 1];
        arr[ind + 1] = arr[ind];
        arr[ind] = temp;
      }
    }
  }
  return arr;
};
const btn = document
  .getElementById("btn")
  .addEventListener("click", myFunction);

  