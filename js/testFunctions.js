// Test function for calling from this .js
function myFunction2 () {
  document.getElementById("test").innerHTML = "myFunction2";
  console.log("myFunction2");
}

var sumaDiez = 0
// Sumar uno a un contador mod 10
function sumaModDiez() {
  sumaDiez = (sumaDiez+1)%10;
  document.getElementById("cont").innerHTML = sumaDiez.toString() + " mod 10";
  console.log("sumaModDiez");
}

// Alert window
function testAlertWindow() {
  window.alert("Warning!!\nFlying unicorns out there!!");
  console.log("testAlertWindow");
}
