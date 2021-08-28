function showAmount(valNum,newAmount) {
  valNum = parseFloat(valNum);
  newAmount = parseFloat(valNum);
  document.getElementById("demo").innerHTML= (valNum-32)*5/9 + "C" + "&deg";
  document.getElementById("amount").innerHTML = newAmount;
}

function showAmount1(valNum,newAmount) {
  valNum = parseFloat(valNum);
  newAmount = parseFloat(valNum);
  document.getElementById("mile").innerHTML= valNum * 1.609344 + " " + "Km";
  document.getElementById("amount1").innerHTML = newAmount;
}

function moneyConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("money").innerHTML= valNum * 3.1288 + " " + "GEL";
}


  



