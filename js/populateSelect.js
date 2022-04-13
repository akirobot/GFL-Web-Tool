var selectedDoll;
var deleteID;

function populateSelect(){
    clearSelect("dollPick");
    var select = document.getElementById("dollPick");
    var options = _FOUNDDOLLS;
    for (var i = 0; i < options.length; i++){
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt.Name;
        el.value = opt.ID;
        el.id = 'temp';
        select.appendChild(el);
    }
}

function clearSelect(deleteID){
    let element = document.getElementById(deleteID);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}