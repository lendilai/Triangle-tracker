function tracker(){
  var sideA = parseFloat(document.getElementById("a").value);
  var sideB = parseFloat(document.getElementById("b").value);
  var sideC = parseFloat(document.getElementById("c").value);
  var text;
  var sides = ["sideA", "sideB", "sideC", "text"]
  if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
    text = document.getElementById('result').innerHTML = '<strong>Please enter a value for each side!</strong>';
  }
      else if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA){
          text = document.getElementById('result').innerHTML = '<strong>This is not a triangle.</strong> <br> <img src="Images/not.jpg">';
      }
      else if (sideA === sideB && sideA === sideC && sideB === sideC){
        text = document.getElementById('result').innerHTML = 'This is an <strong>equilateral</strong> triangle <br> <img src="Images/equilateral.png">';
      }
      else if (sideA === sideB || sideA === sideC || sideB === sideC){
        text = document.getElementById('result').innerHTML = 'This is an <strong>isosceles</strong> triangle <br> <img src="Images/isosceles.png">';
      }
      else if (sideA**2 + sideB**2 === sideC**2){
        text = document.getElementById('result').innerHTML = 'This is a <strong>right-angled</strong> triangle.  <br> <img src="Images/right.png">';
      }
        else {
          text = document.getElementById('result').innerHTML = 'This is a <strong>scalene</strong> triangle. <br> <img src="Images/scalene.jpg">';
        }
  }
  var triangle = function(){
    var sideA = parseFloat(document.getElementById("a").value);
    var sideB = parseFloat(document.getElementById("b").value);
    var sideC = parseFloat(document.getElementById("c").value);

    var sum = parseFloat((sideA + sideB + sideC) / 2);
    var final = parseFloat(Math.sqrt(sum * (sum - sideA) * (sum - sideB) * (sum - sideC)));
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
      document.getElementById('area').innerHTML = "Please enter a value for each side."
    }
      else {
        document.getElementById('area').innerHTML = "Area = " + final;
      }
  };
