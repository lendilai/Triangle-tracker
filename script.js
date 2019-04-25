function tracker(){
  var sideA = parseFloat(document.getElementById('a').value;
  var sideB = parseFloat(document.getElementById('b').value;
  var sideC = parseFloat(document.getElementById('c').value;
  var text;
}


if ((sideA + sideB <= sideC) || (sideA + sideC <= sideB) || (sideB + sideC <= sideA)){
    text = document.getElementById('result').innerHTML = "This is not a triangle!";
}
  else if ((sideA === sideB && sideA === sideC && sideB === sideC)){
    text = document.getElementById('result').innerHTML = "This is an equilateral triangle";
  }
  else if (sideA === sideB || sideA === sideC || sideB === sideC){
    text = document.getElementById('result').innerHTML = "This is an isosceles triangle";
  }
