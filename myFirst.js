function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("demo").innerHTML= (valNum-32)*5/9 + "C" + "&deg";
}

function milesConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("mile").innerHTML= valNum * 1.609344 + " " + "Km";
}

function moneyConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("money").innerHTML= valNum * 3.1288 + " " + "GEL";
}


  



