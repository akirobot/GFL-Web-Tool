//Fill populate array with data
function populateSelect(dollCase){
    //Clear current dropdown
    clearSelect('dollPick' +dollCase);
    //Double check other arrays
    //Find dropdown
    var select = document.getElementById('dollPick' +dollCase);
    switch (dollCase){
        case 1:
            for (var i = 0; i < _FOUNDDOLLS1.length; i++){
                var opt = _FOUNDDOLLS1[i];
                var el = document.createElement("option");
                el.textContent = opt.Name;
                el.value = opt.ID;
                el.id = 'temp';
                select.appendChild(el);
            }
            break;
        case 2:
            for (var i = 0; i < _FOUNDDOLLS2.length; i++){
                var opt = _FOUNDDOLLS2[i];
                var el = document.createElement("option");
                el.textContent = opt.Name;
                el.value = opt.ID;
                el.id = 'temp';
                select.appendChild(el);
            }
            break;
        case 3:
            for (var i = 0; i < _FOUNDDOLLS3.length; i++){
                var opt = _FOUNDDOLLS3[i];
                var el = document.createElement("option");
                el.textContent = opt.Name;
                el.value = opt.ID;
                el.id = 'temp';
                select.appendChild(el);
            }
            break;
        case 4:
            for (var i = 0; i < _FOUNDDOLLS4.length; i++){
                var opt = _FOUNDDOLLS4[i];
                var el = document.createElement("option");
                el.textContent = opt.Name;
                el.value = opt.ID;
                el.id = 'temp';
                select.appendChild(el);
            }
            break;
        case 5:
            for (var i = 0; i < _FOUNDDOLLS5.length; i++){
                var opt = _FOUNDDOLLS5[i];
                var el = document.createElement("option");
                el.textContent = opt.Name;
                el.value = opt.ID;
                el.id = 'temp';
                select.appendChild(el);
            }
            break;
    }
}

function clearSelect(deleteID){
    console.clear();
    let element = document.getElementById(deleteID);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}