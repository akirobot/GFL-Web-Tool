//Fill populate array with data
function populateSelect(getElement){
    //Clear current dropdown
    clearSelect(getElement);
    //Find dropdown
    var select = document.getElementById(getElement);
    //
    for (var i = 0; i < _FOUNDDOLLS.length; i++){
        var opt = _FOUNDDOLLS[i];
        var el = document.createElement("option");
        el.textContent = opt.Name;
        el.value = opt.ID;
        el.id = 'temp';
        select.appendChild(el);
    }
}

function clearSelect(deleteID){
    console.clear();
    let element = document.getElementById(deleteID);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}