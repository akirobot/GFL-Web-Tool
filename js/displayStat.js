var _FOUNDDOLL1;
var _FOUNDDOLL2;
var _FOUNDDOLL3;
var _FOUNDDOLL4;
var _FOUNDDOLL5;

//Find specified doll from selection with given variables
//EditID - Where to display final doll data
//AppendID - Where to attach doll data to
//CaseID - Condition for determining where loaded data will be stored
function findDoll(caseID){
    console.clear();

    //Get the currently selected doll from select dropdown
    var idSearch = document.getElementById('dollPick' +caseID);

    //Temp variable
    var dollToFill;

    //console.log(idSearch.value);

    //Iterate through list of T-Dolls, if ID of selection matches, store, break loop
    //  Note: I couldn't get .find() to work for some reason, otherwise I would have used that
    for(var i = 0; i < _DOLLS.length; i++){
        if (_DOLLS[i].ID == idSearch.value){
            dollToFill = _DOLLS[i];
            break;
        }
    }

    //Switch case to attach data to global variable for use later
    switch (caseID){
        case 1:
            _FOUNDDOLL1 = dollToFill;
            editHTML("Health1", _FOUNDDOLL1.Health);
            editHTML("ID1", _FOUNDDOLL1.ID);
            editHTML("Cost1", "Ammo: " +_FOUNDDOLL1.Ammo +"<br> Ration: " +_FOUNDDOLL1.Ration);
            editHTML("DMG1", _FOUNDDOLL1.DMG);
            editHTML("EVA1", _FOUNDDOLL1.EVA);
            editHTML("ACC1", _FOUNDDOLL1.ACC);
            editHTML("ROF1", _FOUNDDOLL1.ROF);
            editHTML("Move1", _FOUNDDOLL1.Move);
            editHTML("Armor1", _FOUNDDOLL1.Armor);
            editHTML("critRate1", _FOUNDDOLL1.CritRate);
            editHTML("critDMG1", _FOUNDDOLL1.CritDamage);
            editHTML("AP1", _FOUNDDOLL1.AP);
            if (_FOUNDDOLL1.Clip != null){
                editHTML("Clip1", _FOUNDDOLL1.Clip);
            }
            else{
                editHTML("Clip1", "∞");
            }
            console.log("Updated doll 1: "+_FOUNDDOLL1.Name);
            break;
        case 2:
            _FOUNDDOLL2 = dollToFill;
            editHTML("Health2", _FOUNDDOLL2.Health);
            editHTML("Cost2", "Ammo: " +_FOUNDDOLL2.Ammo +"<br> Ration: " +_FOUNDDOLL2.Ration);
            editHTML("ID2", _FOUNDDOLL2.ID);
            editHTML("DMG2", _FOUNDDOLL2.DMG);
            editHTML("EVA2", _FOUNDDOLL2.EVA);
            editHTML("ACC2", _FOUNDDOLL2.ACC);
            editHTML("ROF2", _FOUNDDOLL2.ROF);
            editHTML("Move2", _FOUNDDOLL2.Move);
            editHTML("Armor2", _FOUNDDOLL2.Armor);
            editHTML("critRate2", _FOUNDDOLL2.CritRate);
            editHTML("critDMG2", _FOUNDDOLL2.CritDamage);
            editHTML("AP2", _FOUNDDOLL2.AP);
            if (_FOUNDDOLL2.Clip != null){
                editHTML("Clip2", _FOUNDDOLL2.Clip);
            }
            else{
                editHTML("Clip2", "∞");
            }
            console.log("Updated doll 1: "+_FOUNDDOLL2.Name);
            break;
        case 3:
            _FOUNDDOLL3 = dollToFill;
            editHTML("Health3", _FOUNDDOLL3.Health);
            editHTML("Cost3", "Ammo: " +_FOUNDDOLL3.Ammo +"<br> Ration: " +_FOUNDDOLL3.Ration);
            editHTML("ID3", _FOUNDDOLL3.ID);
            editHTML("DMG3", _FOUNDDOLL3.DMG);
            editHTML("EVA3", _FOUNDDOLL3.EVA);
            editHTML("ACC3", _FOUNDDOLL3.ACC);
            editHTML("ROF3", _FOUNDDOLL3.ROF);
            editHTML("Move3", _FOUNDDOLL3.Move);
            editHTML("Armor3", _FOUNDDOLL3.Armor);
            editHTML("critRate3", _FOUNDDOLL3.CritRate);
            editHTML("critDMG3", _FOUNDDOLL3.CritDamage);
            editHTML("AP3", _FOUNDDOLL3.AP);
            if (_FOUNDDOLL3.Clip != null){
                editHTML("Clip3", _FOUNDDOLL3.Clip);
            }
            else{
                editHTML("Clip3", "∞");
            }
            console.log("Updated doll 3: "+_FOUNDDOLL3.Name);
            break;
        case 4:
            _FOUNDDOLL4 = dollToFill;
            editHTML("Health4", _FOUNDDOLL4.Health);
            editHTML("Cost4", "Ammo: " +_FOUNDDOLL4.Ammo +"<br> Ration: " +_FOUNDDOLL4.Ration);
            editHTML("ID4", _FOUNDDOLL4.ID);
            editHTML("DMG4", _FOUNDDOLL4.DMG);
            editHTML("EVA4", _FOUNDDOLL4.EVA);
            editHTML("ACC4", _FOUNDDOLL4.ACC);
            editHTML("ROF4", _FOUNDDOLL4.ROF);
            editHTML("Move4", _FOUNDDOLL4.Move);
            editHTML("Armor4", _FOUNDDOLL4.Armor);
            editHTML("critRate4", _FOUNDDOLL4.CritRate);
            editHTML("critDMG4", _FOUNDDOLL4.CritDamage);
            editHTML("AP4", _FOUNDDOLL4.AP);
            if (_FOUNDDOLL4.Clip != null){
                editHTML("Clip4", _FOUNDDOLL4.Clip);
            }
            else{
                editHTML("Clip4", "∞");
            }
            console.log("Updated doll 4: "+_FOUNDDOLL4.Name);
            break;
        case 5:
            _FOUNDDOLL5 = dollToFill;
            editHTML("Health5", _FOUNDDOLL5.Health);
            editHTML("Cost5", "Ammo: " +_FOUNDDOLL5.Ammo +"<br> Ration: " +_FOUNDDOLL5.Ration);
            editHTML("ID5", _FOUNDDOLL5.ID);
            editHTML("DMG5", _FOUNDDOLL5.DMG);
            editHTML("EVA5", _FOUNDDOLL5.EVA);
            editHTML("ACC5", _FOUNDDOLL5.ACC);
            editHTML("ROF5", _FOUNDDOLL5.ROF);
            editHTML("Move5", _FOUNDDOLL5.Move);
            editHTML("Armor5", _FOUNDDOLL5.Armor);
            editHTML("critRate5", _FOUNDDOLL5.CritRate);
            editHTML("critDMG5", _FOUNDDOLL5.CritDamage);
            editHTML("AP5", _FOUNDDOLL5.AP);
            if (_FOUNDDOLL5.Clip != null){
                editHTML("Clip5", _FOUNDDOLL5.Clip);
            }
            else{
                editHTML("Clip5", "∞");
            }
            console.log("Updated doll 5: "+_FOUNDDOLL5.Name);
            break;
    }
    
    //Check added because of error on first load, waits until all dolls have been added
    if (_FOUNDDOLL1 != null && _FOUNDDOLL2 != null && _FOUNDDOLL3 != null && _FOUNDDOLL4 != null && _FOUNDDOLL5 != null){
        console.log("Doll 1: " +_FOUNDDOLL1.Name);
        console.log("Doll 2: " +_FOUNDDOLL2.Name);
        console.log("Doll 3: " +_FOUNDDOLL3.Name);
        console.log("Doll 4: " +_FOUNDDOLL4.Name);
        console.log("Doll 5: " +_FOUNDDOLL5.Name);
        //Check added because of error on first load, waits until fairy has been added
        if (_FOUNDFAIRY != null){
            console.log("Fairy: "+_FOUNDFAIRY.Name);
        }
    }
}

function appendNode(className, editId, infoToFill){
    let Node = document.createElement('div');
    Node.className = className;
    Node.id = editId;
    Node.innerHTML = className +": " +infoToFill +"<br>";
    document.getElementById(editId).append(Node);
}

function editHTML(editId, infoToFill){
    document.getElementById(editId).innerHTML = infoToFill;
}