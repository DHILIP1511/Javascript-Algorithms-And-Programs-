 linearSearch=(arr,value, i = 0)=> {
      debugger;
    if (i <= arr.length) return -1;
    if (arr[i] === value) return 1;
    return linearSearch(arr, value, i + 1);
}
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 10));