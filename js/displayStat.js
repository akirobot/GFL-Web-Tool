var _FOUNDDOLL1;
var _FOUNDDOLL2;
var _FOUNDDOLL3;
var _FOUNDDOLL4;
var _FOUNDDOLL5;

//Find specified doll from selection with given variables
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
            break;
        case 2:
            _FOUNDDOLL2 = dollToFill;
            break;
        case 3:
            _FOUNDDOLL3 = dollToFill;
            break;
        case 4:
            _FOUNDDOLL4 = dollToFill;
            break;
        case 5:
            _FOUNDDOLL5 = dollToFill;
            break;
    }
    editHTML("HP" +caseID, "HP: " +dollToFill.Health);
    editHTML("Cost" +caseID, "Ammo: " +dollToFill.Ammo +"<br> Ration: " +dollToFill.Ration);
    editHTML("ID" +caseID, dollToFill.ID);
    editHTML("DMG" +caseID, dollToFill.DMG);
    editHTML("EVA" +caseID, dollToFill.EVA);
    editHTML("ACC" +caseID, dollToFill.ACC);
    editHTML("ROF" +caseID, dollToFill.ROF);
    editHTML("MOV" +caseID, dollToFill.Move);
    editHTML("ARM" +caseID, dollToFill.Armor);
    editHTML("CRT" +caseID, dollToFill.CritRate);
    editHTML("CDM" +caseID, dollToFill.CritDamage);
    editHTML("ARP" +caseID, dollToFill.AP);
    if (dollToFill.Clip != null){
        editHTML("CLP" +caseID, dollToFill.Clip);
    }
    else{
        editHTML("CLP" +caseID, "∞");
    }
    console.log("Updated doll " +caseID +": "+dollToFill.Name);
    
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
    modCheck(caseID);
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
    document.getElementById(caseID +'skill1Name').innerHTML = found.Name +" 🛈<span class='skillInfoText'>" +found.Description +"</span>";
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
    var modDMG = Math.round(found.DMG * ((100 + parseInt(document.getElementById(caseID +"dmgMod").getAttribute("value")))/100));
    document.getElementById("modDMG" +caseID).innerHTML = modDMG;
    document.getElementById("modDMG" +caseID).setAttribute("Value", modDMG);

    var modEVA = Math.floor(found.EVA * ((100 + parseInt(document.getElementById(caseID +"evaMod").getAttribute("value")))/100));
    document.getElementById("modEVA" +caseID).innerHTML = modEVA;
    document.getElementById("modEVA" +caseID).setAttribute("Value", modEVA);

    var modACC = Math.floor(found.ACC * ((100 + parseInt(document.getElementById(caseID +"accMod").getAttribute("value")))/100));
    document.getElementById("modACC" +caseID).innerHTML = modACC;
    document.getElementById("modACC" +caseID).setAttribute("Value", modACC);

    var rofCheck = Math.floor(found.ROF * ((100 + parseInt(document.getElementById(caseID +"rofMod").getAttribute("value")))/100));
    document.getElementById("modROF" +caseID).innerHTML = rofCheck;
    document.getElementById("modROF" +caseID).setAttribute("Value", rofCheck);
    if (rofCheck >= 116 && found.Type != "MG"){
        document.getElementById("rofWarning" +caseID).innerHTML = "⚠<span class='warningText'>Over ROF breakpoint (116) <br> Further ROF buffs will not matter</span>";
    }
    else if (found.Type == "SG" && rofCheck >= 50){
        document.getElementById("rofWarning" +caseID).innerHTML = "⚠<span class='warningText'>Over ROF breakpoint (50) <br> Further ROF buffs will not matter</span>";
    }
    else{
        document.getElementById("rofWarning" +caseID).innerHTML = "-";
    }

    var modMOV = found.Move + parseInt(document.getElementById(caseID +"movMod").getAttribute("value"));
    document.getElementById("modMOV" +caseID).innerHTML = modMOV;
    document.getElementById("modMOV" +caseID).setAttribute("Value", modMOV);
    
    var modARM = found.Armor + parseInt(document.getElementById(caseID +"armMod").getAttribute("value"));
    document.getElementById("modARM" +caseID).innerHTML = modARM;
    document.getElementById("modARM" +caseID).setAttribute("Value", modARM);

    var crtCheck = Math.round(found.CritRate * ((100 + parseInt(document.getElementById(caseID +"crtMod").getAttribute("value")))/100));
    document.getElementById("modCRT" +caseID).innerHTML = crtCheck;
    document.getElementById("modCRT" +caseID).setAttribute("Value", crtCheck);
    if (crtCheck >= 100){
        document.getElementById("crtWarning" +caseID).innerHTML = "⚠<span class='warningText'>Over Crit breakpoint (100) <br> Further Crit buffs will not matter</span>";
    }
    else{
        document.getElementById("crtWarning" +caseID).innerHTML = "-";
    }

    var modCDM = Math.round(found.CritDamage * ((100 + parseInt(document.getElementById(caseID +"cdmMod").getAttribute("value")))/100));
    document.getElementById("modCDM" +caseID).innerHTML = modCDM;
    document.getElementById("modCDM" +caseID).setAttribute("Value", modCDM);

    var modARP = Math.round(found.AP * ((100 + parseInt(document.getElementById(caseID +"arpMod").getAttribute("value")))/100));
    document.getElementById("modARP" +caseID).innerHTML = modARP;
    document.getElementById("modARP" +caseID).setAttribute("Value", modARP);

    var modCLP = Math.round(found.Clip * ((100 + parseInt(document.getElementById(caseID +"clpMod").getAttribute("value")))/100));;
    if (found.Clip != null){
        document.getElementById("modCLP" +caseID).innerHTML = modCLP;
        document.getElementById("modCLP" +caseID).setAttribute("Value", modCLP);
    }
    else {
        document.getElementById("modCLP" +caseID).innerHTML = "∞";
        document.getElementById("modCLP" +caseID).setAttribute("Value", 0);
    }
    
    //checkStatChange(caseID);
    //calculateDPS(caseID, found);
}

function calculateDPS(caseID, found){
    var fperAtk;
    if (found.Type != "MG" && found.Type !="SG" && found.ROF > 116){
        fperAtk = Math.floor (1500/116);
    }
    else if (found.Type == "MG"){
        fperAtk = 10;
    }
    else if (found.Type == "SG" && found.ROF > 50){
        fperAtk = Math.floor (1500/50);
    }
    else {
        fperAtk = Math.floor(1500/found.ROF);
    }
    var attperSec = 30/fperAtk;
    var hitRate = found.ACC;
    var critRate = (100 + found.CritRate)/100;
    var dps = Math.round((found.DMG * (1-critRate) + found.CritDamage * critRate) * attperSec * hitRate * 5);
    document.getElementById("unmoddedDPS" +caseID).innerHTML = dps;

    var moddedROF = parseInt(document.getElementById("modROF" +caseID).getAttribute("value"));
    var modFperAtk;
    if (found.Type != "MG" && found.Type !="SG" && moddedROF > 116){
        modFperAtk = Math.floor (1500/116);
    }
    else if (found.Type == "MG"){
        modFperAtk = 10;
    }
    else if (found.Type == "SG" && moddedROF > 50){
        modFperAtk = Math.floor (1500/50);
    }
    else {
        modFperAtk = Math.floor(1500/moddedROF);
    }
    var modAttperSec = 30/modFperAtk;
    var modHitRate = parseInt(document.getElementById("modACC" +caseID).getAttribute("value"));
    console.log (parseInt(document.getElementById("modCRT" +caseID).getAttribute("value")));
    var modCritRate = (100 + parseInt(document.getElementById("modCRT" +caseID).getAttribute("value"))/100);
    var modDps = Math.round((parseInt(document.getElementById("modDMG" +caseID).getAttribute("value")) * (1-modCritRate) + parseInt(document.getElementById("modCDM" +caseID).getAttribute("value")) * modCritRate) * modAttperSec * modHitRate * 5);
    document.getElementById("moddedDPS" +caseID).innerHTML = modDps;
}
