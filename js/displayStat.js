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
    var idSearch = document.getElementById('nameSelect' +caseID);

    //Temp variable
    var dollToFill;

    //console.log(idSearch.value);

    //Iterate through list of T-Dolls, if ID of selection matches, store, break loop
    //  Note: I couldn't get .find() to work for some reason, otherwise I would have used that
    //I could make this more specific by creating arrays of all combinations ahead of time, then querying those, but loading times aren't that bad now, so I'm not going to worry about it.
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
            editHTML("HP1", "HP: " +_FOUNDDOLL1.Health);
            editHTML("Cost1", "Ammo: " +_FOUNDDOLL1.Ammo +"<br> Ration: " +_FOUNDDOLL1.Ration);
            editHTML("ID1", _FOUNDDOLL1.ID);
            editHTML("DMG1", _FOUNDDOLL1.DMG);
            editHTML("EVA1", _FOUNDDOLL1.EVA);
            editHTML("ACC1", _FOUNDDOLL1.ACC);
            editHTML("ROF1", _FOUNDDOLL1.ROF);
            editHTML("MOV1", _FOUNDDOLL1.Move);
            editHTML("ARM1", _FOUNDDOLL1.Armor);
            editHTML("CRT1", _FOUNDDOLL1.CritRate);
            editHTML("CDM1", _FOUNDDOLL1.CritDamage);
            editHTML("ARP1", _FOUNDDOLL1.AP);
            if (_FOUNDDOLL1.Clip != null){
                editHTML("CLP1", _FOUNDDOLL1.Clip);
            }
            else{
                editHTML("CLP1", "∞");
            }
            console.log("Updated doll 1: "+_FOUNDDOLL1.Name);
            break;
        case 2:
            _FOUNDDOLL2 = dollToFill;
            editHTML("HP2", "HP: " +_FOUNDDOLL2.Health);
            editHTML("Cost2", "Ammo: " +_FOUNDDOLL2.Ammo +"<br> Ration: " +_FOUNDDOLL2.Ration);
            editHTML("ID2", _FOUNDDOLL2.ID);
            editHTML("DMG2", _FOUNDDOLL2.DMG);
            editHTML("EVA2", _FOUNDDOLL2.EVA);
            editHTML("ACC2", _FOUNDDOLL2.ACC);
            editHTML("ROF2", _FOUNDDOLL2.ROF);
            editHTML("MOV2", _FOUNDDOLL2.Move);
            editHTML("ARM2", _FOUNDDOLL2.Armor);
            editHTML("CRT2", _FOUNDDOLL2.CritRate);
            editHTML("CDM2", _FOUNDDOLL2.CritDamage);
            editHTML("ARP2", _FOUNDDOLL2.AP);
            if (_FOUNDDOLL2.Clip != null){
                editHTML("CLP2", _FOUNDDOLL2.Clip);
            }
            else{
                editHTML("CLP2", "∞");
            }
            console.log("Updated doll 1: "+_FOUNDDOLL2.Name);
            break;
        case 3:
            _FOUNDDOLL3 = dollToFill;
            editHTML("HP3", "HP: " +_FOUNDDOLL3.Health);
            editHTML("Cost3", "Ammo: " +_FOUNDDOLL3.Ammo +"<br> Ration: " +_FOUNDDOLL3.Ration);
            editHTML("ID3", _FOUNDDOLL3.ID);
            editHTML("DMG3", _FOUNDDOLL3.DMG);
            editHTML("EVA3", _FOUNDDOLL3.EVA);
            editHTML("ACC3", _FOUNDDOLL3.ACC);
            editHTML("ROF3", _FOUNDDOLL3.ROF);
            editHTML("MOV3", _FOUNDDOLL3.Move);
            editHTML("ARM3", _FOUNDDOLL3.Armor);
            editHTML("CRT3", _FOUNDDOLL3.CritRate);
            editHTML("CDM3", _FOUNDDOLL3.CritDamage);
            editHTML("ARP3", _FOUNDDOLL3.AP);
            if (_FOUNDDOLL3.Clip != null){
                editHTML("CLP3", _FOUNDDOLL3.Clip);
            }
            else{
                editHTML("CLP3", "∞");
            }
            console.log("Updated doll 3: "+_FOUNDDOLL3.Name);
            break;
        case 4:
            _FOUNDDOLL4 = dollToFill;
            editHTML("HP4", "HP: " +_FOUNDDOLL4.Health);
            editHTML("Cost4", "Ammo: " +_FOUNDDOLL4.Ammo +"<br> Ration: " +_FOUNDDOLL4.Ration);
            editHTML("ID4", _FOUNDDOLL4.ID);
            editHTML("DMG4", _FOUNDDOLL4.DMG);
            editHTML("EVA4", _FOUNDDOLL4.EVA);
            editHTML("ACC4", _FOUNDDOLL4.ACC);
            editHTML("ROF4", _FOUNDDOLL4.ROF);
            editHTML("MOV4", _FOUNDDOLL4.Move);
            editHTML("ARM4", _FOUNDDOLL4.Armor);
            editHTML("CRT4", _FOUNDDOLL4.CritRate);
            editHTML("CDM4", _FOUNDDOLL4.CritDamage);
            editHTML("ARP4", _FOUNDDOLL4.AP);
            if (_FOUNDDOLL4.Clip != null){
                editHTML("CLP4", _FOUNDDOLL4.Clip);
            }
            else{
                editHTML("CLP4", "∞");
            }
            console.log("Updated doll 4: "+_FOUNDDOLL4.Name);
            break;
        case 5:
            _FOUNDDOLL5 = dollToFill;
            editHTML("HP5", "HP: " +_FOUNDDOLL5.Health);
            editHTML("Cost5", "Ammo: " +_FOUNDDOLL5.Ammo +"<br> Ration: " +_FOUNDDOLL5.Ration);
            editHTML("ID5", _FOUNDDOLL5.ID);
            editHTML("DMG5", _FOUNDDOLL5.DMG);
            editHTML("EVA5", _FOUNDDOLL5.EVA);
            editHTML("ACC5", _FOUNDDOLL5.ACC);
            editHTML("ROF5", _FOUNDDOLL5.ROF);
            editHTML("MOV5", _FOUNDDOLL5.Move);
            editHTML("ARM5", _FOUNDDOLL5.Armor);
            editHTML("CRT5", _FOUNDDOLL5.CritRate);
            editHTML("CDM5", _FOUNDDOLL5.CritDamage);
            editHTML("ARP5", _FOUNDDOLL5.AP);
            if (_FOUNDDOLL5.Clip != null){
                editHTML("CLP5", _FOUNDDOLL5.Clip);
            }
            else{
                editHTML("CLP5", "∞");
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
    displayTiles(caseID);

    displaySkills(caseID);

    displayModdedStats(caseID);
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

function checkID(idNum, toFind){
    return idNum == toFind;
}

function displayTiles(caseID){
    clearTiles(caseID);
    var found;
    switch (caseID){
        case 1:
            found = _TILES.find(e => e.ID === _FOUNDDOLL1.ID);
            break;
        case 2:
            found = _TILES.find(e => e.ID === _FOUNDDOLL2.ID);
            break;
        case 3:
            found = _TILES.find(e => e.ID === _FOUNDDOLL3.ID);
            break;
        case 4:
            found = _TILES.find(e => e.ID === _FOUNDDOLL4.ID);
            break;
        case 5:
            found = _TILES.find(e => e.ID === _FOUNDDOLL5.ID);
            break;
    }
    var tiles = Array.from(String(found.Tiles));
    document.getElementById(caseID +"-" +tiles[0]).style = "background-color:white; color: black";
    for (var i = 1; i < tiles.length; i++){
        document.getElementById(caseID +"-" +tiles[i]).style = "background-color:#00ffde; color:black";
    }
    displayBuffs(found, caseID);
}

function displayBuffs(found, caseID){
    document.getElementById(caseID +'type').innerHTML = "For: " +found.Type;
    document.getElementById(caseID +'buff1').innerHTML = found.Buff1 +" " +found.B1 +"%";
    if (found.Buff2 != null){
        document.getElementById(caseID +'buff2').innerHTML = found.Buff2 +" " +found.B2 +"%";
    }
    if (found.Buff3 != null){
        document.getElementById(caseID +'buff3').innerHTML = found.Buff3 +" " +found.B3 +"%";
    }
}

function clearTiles(caseID){
    for (var i = 1; i <= 9; i++){
        document.getElementById(caseID +"-" +i).style = "";
    }
}

function displaySkills(caseID){
    var found;
    switch (caseID){
        case 1:
            found = _SKILLS.find(e => e.ID === _FOUNDDOLL1.ID);
            break;
        case 2:
            found = _SKILLS.find(e => e.ID === _FOUNDDOLL2.ID);
            break;
        case 3:
            found = _SKILLS.find(e => e.ID === _FOUNDDOLL3.ID);
            break;
        case 4:
            found = _SKILLS.find(e => e.ID === _FOUNDDOLL4.ID);
            break;
        case 5:
            found = _SKILLS.find(e => e.ID === _FOUNDDOLL5.ID);
            break;
    }
    document.getElementById(caseID +'skill1Name').innerHTML = found.Name;
    document.getElementById(caseID +'ICD1').innerHTML = "ICD: " +found.ICooldown +"s";
    document.getElementById(caseID +'CD1').innerHTML = "CD: " +found.Cooldown +"s";
}

function displayModdedStats(caseID){
    var found;
    switch (caseID){
        case 1:
            found = _FOUNDDOLL1;
            break;
        case 2:
            found = _FOUNDDOLL2;
            break;
        case 3:
            found = _FOUNDDOLL3;
            break;
        case 4:
            found = _FOUNDDOLL4;
            break;
        case 5:
            found = _FOUNDDOLL5;
            break;
    }
    document.getElementById("modDMG" +caseID).innerHTML = Math.round(found.DMG * ((100 + parseInt(document.getElementById(caseID +"dmgMod").getAttribute("value")))/100));
    document.getElementById("modEVA" +caseID).innerHTML = Math.round(found.EVA * ((100 + parseInt(document.getElementById(caseID +"evaMod").getAttribute("value")))/100));
    document.getElementById("modACC" +caseID).innerHTML = Math.round(found.ACC * ((100 + parseInt(document.getElementById(caseID +"accMod").getAttribute("value")))/100));
    document.getElementById("modROF" +caseID).innerHTML = Math.round(found.ROF * ((100 + parseInt(document.getElementById(caseID +"rofMod").getAttribute("value")))/100));
    document.getElementById("modMOV" +caseID).innerHTML = Math.round(found.Move * ((100 + parseInt(document.getElementById(caseID +"movMod").getAttribute("value")))/100));
    if (found.Armor != 0){
        document.getElementById("modARM" +caseID).innerHTML = Math.round(found.ACC * ((100 + parseInt(document.getElementById(caseID +"armMod").getAttribute("value")))/100));
    }
    else {
        document.getElementById("modARM" +caseID).innerHTML = 0;
    }
    document.getElementById("modCRT" +caseID).innerHTML = Math.round(found.CritRate * ((100 + parseInt(document.getElementById(caseID +"crtMod").getAttribute("value")))/100));
    document.getElementById("modCDM" +caseID).innerHTML = Math.round(found.CritDamage * ((100 + parseInt(document.getElementById(caseID +"cdmMod").getAttribute("value")))/100));
    document.getElementById("modARP" +caseID).innerHTML = Math.round(found.AP * ((100 + parseInt(document.getElementById(caseID +"arpMod").getAttribute("value")))/100));
    if (found.Clip != null){
        document.getElementById("modCLP" +caseID).innerHTML = Math.round(found.Clip * ((100 + parseInt(document.getElementById(caseID +"clpMod").getAttribute("value")))/100));
    }
    else {
        document.getElementById("modCLP" +caseID).innerHTML = "∞";
    }
}