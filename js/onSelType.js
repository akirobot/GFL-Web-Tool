document.getElementById("selType1").addEventListener("change", myFunction);
var dollType;
function myFunction(){
    dollType = document.getElementById("selType1").value;
}
document.getElementById("selRare1").addEventListener("change", myFunction2);
var dollRare;
function myFunction2(){
    dollRare = document.getElementById("selRare1").value;
}
export {dollType, dollRare};
