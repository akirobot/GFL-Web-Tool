for(var i = 0; i < 4; i++){
    var myDiv = document.getElementById("dollselect");
    var divClone = myDiv.cloneNode(true);
    document.body.appendChild(divClone);
}