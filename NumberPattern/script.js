mainFunction = ()=>{
      const numberOfLines = Number(document.getElementById("usrInp").value);
      if (numberOfLines%2===0) {
            alert('Enter odd number')
      } else {
                let str = "";
                for (let index = 1; index <= numberOfLines; index += 2) {
                  for (let j = 1; j <= index; j++) {
                    str += j;
                  }
                  str += "<br/>";
                }
                for (let index = numberOfLines; index > 1; index -= 2) {
                  for (let j = 1; j < index - 1; j++) {
                    str += j;
                  }
                  str += "<br/>";
                }
                document.getElementById("para").innerHTML = `${str}`;  
      }

}

