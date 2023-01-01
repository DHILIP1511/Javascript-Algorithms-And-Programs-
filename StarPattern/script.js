
func=()=>{
const Numberofstar = Number(document.getElementById("stars").value);

  let star = "";
  for (let index = 1; index <= Numberofstar; index++) {
    for (let ind = 0; ind < index; ind++) {
      star += "*";
    }
    star += "<br/>";
  }
  for (let index = Numberofstar; index > 0; index--) {
    for (let ind = index; ind > 0; ind--) {
      star += "*";
    }
    star += "<br/>";
  }
  console.log(star);
  document.getElementById('show').innerHTML = star
}

// 1 * 
// 2 **
// 3 ***
// 4 ****
// 5 *****
// 4 ****
// 3 ***
// 2 **
// 1 *
//i =lines 
//j= variable like stars
//k = secondary variable 
