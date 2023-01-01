mainFunction = () => {
  const rows = Number(document.getElementById("rowInp").value);
  let pattern = ""; //
  for (let i = 1; i <= rows; i++) {
    // lines
    for (let j = 1; j <= rows; j++) {
      if (i == 1 || i == rows) pattern += "*"; // fully print stars
      else {
        if (j == 1 || j == rows) {
          pattern += "*";
        } else {
          pattern += " ";
        }
      }
    }
    pattern += "\n";
  }

  console.log(pattern);
};
// i -lines
// j-stars
//
document.getElementById("btn").addEventListener("click", mainFunction);
