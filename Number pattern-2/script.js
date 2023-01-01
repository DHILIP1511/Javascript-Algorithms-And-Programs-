mainFunction = () => {
  let numberOfLines = document.getElementById('lineInp').value;
  let strOutput = "";
  for (let i = 1; i <= numberOfLines; i++) {
    for (let j = 1; j <= numberOfLines - i; j++) {
      strOutput += "&nbsp&nbsp";
    }
    for (let k = 1; k <= i; k++) {
      strOutput += (k > 9) ? k % 10 : k;
    }
    for (let l = i - 1; l > 0; l--) {
      strOutput += (l > 9) ? l % 10 : l;
    }
    strOutput += "<br/>";
  }
  for (let i = numberOfLines - 1; i > 0; i--) {
    for (let j = 1; j <= numberOfLines - i; j++) {
      strOutput += "&nbsp&nbsp";
    }
    for (let k = 1; k <= i; k++) {
      strOutput += (k > 9) ? k % 10 : k;
    }
    for (let l = i - 1; l > 0; l--) {
      strOutput += (l > 9) ? l % 10 : l;
    }
    strOutput += "<br/>";
  }
  document.getElementById("para").innerHTML = strOutput;
};
document.getElementById("btn").addEventListener("click", mainFunction);
// i - lines
// j- space
// k -numbers
// l -reverse loop, decrement loop..
