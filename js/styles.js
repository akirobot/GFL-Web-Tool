function changeLabelColor(idNum){
    switch(document.getElementById("raritySelect" +idNum).value){
        case '1':
            document.getElementById("nameSelect" +idNum).style = "background-color:#dfb6ff";
            document.getElementById("raritySelect" +idNum).style = "background-color:#dfb6ff";
            document.getElementById("typeSelect" +idNum).style = "background-color:#dfb6ff";
            break;
        case '2':
            document.getElementById("nameSelect" +idNum).style = "background-color:#ffffff";
            document.getElementById("raritySelect" +idNum).style = "background-color:#ffffff";
            document.getElementById("typeSelect" +idNum).style ="background-color:#ffffff";
            break;
        case '3':
            document.getElementById("nameSelect" +idNum).style = "background-color:#6bdfce";
            document.getElementById("raritySelect" +idNum).style = "background-color:#6bdfce";
            document.getElementById("typeSelect" +idNum).style = "background-color:#6bdfce";
            break;
        case '4':
            document.getElementById("nameSelect" +idNum).style = "background-color:#d6e35a";
            document.getElementById("raritySelect" +idNum).style = "background-color:#d6e35a";
            document.getElementById("typeSelect" +idNum).style = "background-color:#d6e35a";
            break;
        case '5':
            document.getElementById("nameSelect" +idNum).style = "background-color:#ffb600";
            document.getElementById("raritySelect" +idNum).style = "background-color:#ffb600";
            document.getElementById("typeSelect" +idNum).style = "background-color:#ffb600";
            break;
    }
}

function checkStatChange (caseID){
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

    if (found.DMG < parseInt(document.getElementById("modDMG" +caseID).getAttribute("value"))){
        document.getElementById("dmgWarning" +caseID).innerHTML = "+";
    }
    else {
        document.getElementById("dmgWarning" +caseID).innerHTML = "-";
    }

    if (found.EVA < parseInt(document.getElementById("modEVA" +caseID).getAttribute("value"))){
        document.getElementById("evaWarning" +caseID).innerHTML = "+";
    }
    else {
        document.getElementById("evaWarning" +caseID).innerHTML = "-";
    }

    if (found.ACC < parseInt(document.getElementById("modACC" +caseID).getAttribute("value"))){
        document.getElementById("accWarning" +caseID).innerHTML = "+";
    }
    else {
        document.getElementById("accWarning" +caseID).innerHTML = "-";
    }

    if (found.ROF < parseInt(document.getElementById("modROF" +caseID).getAttribute("value"))){
        document.getElementById("rofWarning" +caseID).innerHTML = "+";
    }
    else {
        document.getElementById("rofWarning" +caseID).innerHTML = "-";
    }

    if (found.Move < parseInt(document.getElementById("modMOV" +caseID).getAttribute("value"))){
        document.getElementById("movWarning" +caseID).innerHTML = "+";
    }
    else {
        document.getElementById("movWarning" +caseID).innerHTML = "-";
    }

    if (found.Armor < parseInt(document.getElementById("modARM" +caseID).getAttribute("value"))){
        document.getElementById("armWarning" +caseID).innerHTML = "+";
    }
    else {
        document.getElementById("armWarning" +caseID).innerHTML = "-";
    }

    if (found.CritRate < parseInt(document.getElementById("modCRT" +caseID).getAttribute("value"))){
        document.getElementById("crtWarning" +caseID).innerHTML = "+";
    }
    else {
        document.getElementById("crtWarning" +caseID).innerHTML = "-";
    }

    if (found.CritDamage < parseInt(document.getElementById("modCDM" +caseID).getAttribute("value"))){
        document.getElementById("cdmWarning" +caseID).innerHTML = "+";
    }
    else {
        document.getElementById("cdmWarning" +caseID).innerHTML = "-";
    }

    if (found.AP < parseInt(document.getElementById("modARP" +caseID).getAttribute("value"))){
        document.getElementById("arpWarning" +caseID).innerHTML = "+";
    }
    else {
        document.getElementById("arpWarning" +caseID).innerHTML = "-";
    }
}