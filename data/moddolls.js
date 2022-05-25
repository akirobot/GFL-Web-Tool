var _MODDOLLS = [
    {ID:1, Name:'SAA', Type:'HG', Star:5, Health:415, Ammo:30, Ration:30, DMG:37, EVA:80, ACC:51, ROF:50, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:2, Name:'M1911', Type:'HG', Star:4, Health:375, Ammo:30, Ration:30, DMG:29, EVA:78, ACC:52, ROF:58, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:5, Name:'M1895', Type:'HG', Star:4, Health:360, Ammo:30, Ration:30, DMG:35, EVA:100, ACC:48, ROF:45, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:7, Name:'Stechkin', Type:'HG', Star:5, Health:425, Ammo:30, Ration:30, DMG:32, EVA:69, ACC:51, ROF:66, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:8, Name:'Makarov', Type:'HG', Star:4, Health:340, Ammo:30, Ration:30, DMG:30, EVA:105, ACC:64, ROF:62, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:12, Name:'C96', Type:'HG', Star:4, Health:425, Ammo:30, Ration:30, DMG:32, EVA:71, ACC:52, ROF:64, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:26, Name:'MP5', Type:'SMG', Star:5, Health:905, Ammo:85, Ration:60, DMG:32, EVA:71, ACC:14, ROF:90, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:29, Name:'Sten MkII', Type:'SMG', Star:4, Health:975, Ammo:85, Ration:60, DMG:29, EVA:79, ACC:17, ROF:86, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:31, Name:'M38', Type:'SMG', Star:4, Health:1085, Ammo:85, Ration:60, DMG:33, EVA:61, ACC:12, ROF:79, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:32, Name:'Micro Uzi', Type:'SMG', Star:4, Health:885, Ammo:85, Ration:60, DMG:26, EVA:83, ACC:13, ROF:104, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:37, Name:'M14', Type:'RF', Star:4, Health:430, Ammo:55, Ration:90, DMG:111, EVA:28, ACC:74, ROF:44, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:39, Name:'Mosin-Nagant', Type:39, Star:5, Health:455, Ammo:55, Ration:90, DMG:136, EVA:40, ACC:89, ROF:31, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:44, Name:'SV-98', Type:'RF', Star:4, Health:430, Ammo:55, Ration:90, DMG:128, EVA:29, ACC:81, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:49, Name:'Type56', Type:'RF', Star:4, Health:475, Ammo:55, Ration:90, DMG:111, EVA:37, ACC:70, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:51, Name:'FN-49', Type:'RF', Star:4, Health:480, Ammo:55, Ration:90, DMG:120, EVA:33, ACC:64, ROF:34, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:53, Name:'NTW-20', Type:'RF', Star:6, Health:475, Ammo:55, Ration:90, DMG:170, EVA:31, ACC:82, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:55, Name:'M4A1', Type:'AR', Star:5, Health:565, Ammo:60, Ration:60, DMG:50, EVA:50, ACC:50, ROF:80, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:56, Name:'M4 SOPMODII', Type:'AR', Star:5, Health:565, Ammo:60, Ration:60, DMG:52, EVA:46, ACC:51, ROF:79, Move:10, Armor:0, CritRate:30, CritDamage:50, AP:15},
    {ID:57, Name:'ST AR-15', Type:'AR', Star:5, Health:540, Ammo:60, Ration:60, DMG:50, EVA:52, ACC:55, ROF:78, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:60, Name:'AS Val', Type:'AR', Star:5, Health:680, Ammo:60, Ration:60, DMG:43, EVA:51, ACC:51, ROF:76, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:61, Name:'StG44', Type:'AR', Star:4, Health:650, Ammo:60, Ration:60, DMG:58, EVA:38, ACC:50, ROF:66, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:63, Name:'G3', Type:'SMG', Star:4, Health:565, Ammo:60, Ration:60, DMG:58, EVA:40, ACC:55, ROF:64, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:64, Name:'G36', Type:'AR', Star:5, Health:650, Ammo:60, Ration:60, DMG:51, EVA:45, ACC:48, ROF:76, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:65, Name:'HK416', Type:'AR', Star:6, Health:625, Ammo:60, Ration:60, DMG:55, EVA:47, ACC:51, ROF:79, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:71, Name:'Galil', Type:'AR', Star:4, Health:635, Ammo:60, Ration:60, DMG:54, EVA:44, ACC:49, ROF:66, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:75, Name:'M1918', Type:'MG', Star:5, Health:805, Ammo:140, Ration:90, DMG:101, EVA:34, ACC:34, ROF:115, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:8},
    {ID:81, Name:'LWMMG', Type:'MG', Star:4, Health:890, Ammo:140, Ration:90, DMG:103, EVA:24, ACC:27, ROF:92, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:89, Name:'Bren', Type:'MG', Star:4, Health:890, Ammo:140, Ration:90, DMG:97, EVA:29, ACC:34, ROF:103, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:8},
    {ID:91, Name:'MP-446', Type:'HG', Star:4, Health:340, Ammo:30, Ration:30, DMG:31, EVA:80, ACC:57, ROF:60, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:93, Name:'IDW', Type:'SMG', Star:4, Health:770, Ammo:85, Ration:60, DMG:27, EVA:92, ACC:16, ROF:75, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:94, Name:'Type64', Type:'SMG', Star:4, Health:905, Ammo:85, Ration:60, DMG:28, EVA:70, ACC:12, ROF:93, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:95, Name:'Type88', Type:'RF', Star:4, Health:520, Ammo:55, Ration:90, DMG:118, EVA:39, ACC:69, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:97, Name:'M950A', Type:'HG', Star:6, Health:400, Ammo:30, Ration:30, DMG:33, EVA:77, ACC:57, ROF:72, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:101, Name:'UMP9', Type:'SMG', Star:5, Health:905, Ammo:85, Ration:60, DMG:29, EVA:84, ACC:18, ROF:87, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:103, Name:'UMP45', Type:'SMG', Star:5, Health:975, Ammo:85, Ration:60, DMG:29, EVA:77, ACC:14, ROF:83, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:104, Name:'G36C', Type:'SMG', Star:6, Health:1085, Ammo:85, Ration:60, DMG:34, EVA:71, ACC:14, ROF:85, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:114, Name:'Welrod MkII', Type:'HG', Star:6, Health:410, Ammo:30, Ration:30, DMG:31, EVA:98, ACC:75, ROF:52, Move:15, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:122, Name:'G11', Type:'AR', Star:6, Health:620, Ammo:60, Ration:60, DMG:48, EVA:44, ACC:48, ROF:97, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:124, Name:'Super SASS', Type:'RF', Star:4, Health:455, Ammo:55, Ration:90, DMG:125, EVA:31, ACC:73, ROF:40, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:125, Name:'MG3', Type:'MG', Star:6, Health:930, Ammo:140, Ration:90, DMG:93, EVA:35, ACC:38, ROF:140, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:136, Name:'PP-19', Type:'SMG', Star:5, Health:950, Ammo:85, Ration:60, DMG:28, EVA:80, ACC:14, ROF:91, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:143, Name:'RO635', Type:'SMG', Star:6, Health:1040, Ammo:85, Ration:60, DMG:29, EVA:77, ACC:15, ROF:97, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:152, Name:'M1897', Type:'SG', Star:4, Health:1355, Ammo:90, Ration:140, DMG:37, EVA:11, ACC:13, ROF:26, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:154, Name:'M500', Type:'SG', Star:4, Health:1355, Ammo:90, Ration:140, DMG:33, EVA:11, ACC:12, ROF:30, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:159, Name:'RMB-93', Type:'SG', Star:4, Health:1240, Ammo:90, Ration:140, DMG:34, EVA:14, ACC:13, ROF:29, Move:6, Armor:23, CritRate:40, CritDamage:50, AP:15, Clip:4},
    {ID:161, Name:'Type97', Type:'SG', Star:5, Health:1355, Ammo:90, Ration:140, DMG:37, EVA:14, ACC:13, ROF:28, Move:6, Armor:22, CritRate:40, CritDamage:50, AP:15, Clip:3},
    {ID:171, Name:'Ribeyrolles', Type:'AR', Star:5, Health:595, Ammo:60, Ration:60, DMG:66, EVA:42, ACC:48, ROF:68, Move:10, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:178, Name:'F1', Type:'SMG', Star:4, Health:1085, Ammo:85, Ration:60, DMG:28, EVA:64, ACC:14, ROF:79, Move:12, Armor:0, CritRate:5, CritDamage:50, AP:15},
    {ID:199, Name:'Type80', Type:'MG', Star:5, Health:915, Ammo:140, Ration:90, DMG:98, EVA:25, ACC:29, ROF:119, Move:4, Armor:0, CritRate:5, CritDamage:50, AP:15, Clip:10},
    {ID:200, Name:'XM3', Type:'RF', Star:5, Health:430, Ammo:55, Ration:90, DMG:140, EVA:33, ACC:94, ROF:37, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:201, Name:'Gepard M1', Type:'RF', Star:4, Health:455, Ammo:55, Ration:90, DMG:156, EVA:29, ACC:83, ROF:30, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15},
    {ID:220, Name:'MP-443', Type:'HG', Star:4, Health:390, Ammo:30, Ration:30, DMG:35, EVA:83, ACC:56, ROF:60, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:221, Name:'GSh-18', Type:'HG', Star:4, Health:370, Ammo:30, Ration:30, DMG:34, EVA:90, ACC:53, ROF:58, Move:15, Armor:0, CritRate:20, CritDamage:50, AP:15},
    {ID:252, Name:'KSVK', Type:'RF', Star:5, Health:455, Ammo:55, Ration:90, DMG:165, EVA:31, ACC:87, ROF:32, Move:7, Armor:0, CritRate:40, CritDamage:50, AP:15}
]

var _MODDOLLFOUND;

function modCheck(caseID){
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
    if (_MODDOLLS.find(e => e.ID === found.ID)){
        document.getElementById("Mod" +caseID).hidden = false;
        _MODDOLLFOUND = _MODDOLLS.find(e => e.ID === found.ID);
    }
    else {
        document.getElementById("Mod" +caseID).hidden = true;
    }
}

function test(caseID){
    var checkBox = document.getElementById("myCheck");
    modCheck(caseID);
    if (checkBox.checked == true){
        document.getElementById(caseID +"skill2").hidden = false;
        document.getElementById("Mod" +caseID).hidden = false;
        modDisplay(caseID);
    }
    else {
        console.log('changed');
        document.getElementById(caseID +"skill2").hidden = true;
        console.log('unchecked');
        findDoll(caseID);
    }
}

function modDisplay(caseID){
    editHTML("HP" +caseID, "HP: " +_MODDOLLFOUND.Health);
    editHTML("Cost" +caseID, "Ammo: " +_MODDOLLFOUND.Ammo +"<br> Ration: " +_MODDOLLFOUND.Ration);
    editHTML("ID" +caseID, _MODDOLLFOUND.ID);
    editHTML("DMG" +caseID, _MODDOLLFOUND.DMG);
    editHTML("EVA" +caseID, _MODDOLLFOUND.EVA);
    editHTML("ACC" +caseID, _MODDOLLFOUND.ACC);
    editHTML("ROF" +caseID, _MODDOLLFOUND.ROF);
    editHTML("MOV" +caseID, _MODDOLLFOUND.Move);
    editHTML("ARM" +caseID, _MODDOLLFOUND.Armor);
    editHTML("CRT" +caseID, _MODDOLLFOUND.CritRate);
    editHTML("CDM" +caseID, _MODDOLLFOUND.CritDamage);
    editHTML("ARP" +caseID, _MODDOLLFOUND.AP);
    if (_MODDOLLFOUND.Clip != null){
        editHTML("CLP" +caseID, _MODDOLLFOUND.Clip);
    }
    else{
        editHTML("CLP" +caseID, "∞");
    }
    console.log("Updated doll " +caseID +": "+_FOUNDDOLL1.Name);
    displayModTiles(caseID);
    displayModSkills(caseID);
    displayModdedStats(caseID);
    displayModdedModStats(caseID);
}

function displayModTiles(caseID){
    clearModTiles(caseID);
    var found;
    switch (caseID){
        case 1:
            found = _MODTILES.find(e => e.ID === _FOUNDDOLL1.ID);
            break;
        case 2:
            found = _MODTILES.find(e => e.ID === _FOUNDDOLL2.ID);
            break;
        case 3:
            found = _MODTILES.find(e => e.ID === _FOUNDDOLL3.ID);
            break;
        case 4:
            found = _MODTILES.find(e => e.ID === _FOUNDDOLL4.ID);
            break;
        case 5:
            found = _MODTILES.find(e => e.ID === _FOUNDDOLL5.ID);
            break;
    }
    var tiles = Array.from(String(found.Tiles));
    document.getElementById(caseID +"-" +tiles[0]).style = "background-color:white; color: black";
    for (var i = 1; i < tiles.length; i++){
        document.getElementById(caseID +"-" +tiles[i]).style = "background-color:#00ffde; color:black";
    }
    displayModBuffs(found, caseID);
}

function displayModBuffs(found, caseID){
    document.getElementById(caseID +'type').innerHTML = "For: " +found.Type;
    document.getElementById(caseID +'buff1').innerHTML = found.Buff1 +" " +found.B1 +"%";
    if (found.Buff2 != null){
        document.getElementById(caseID +'buff2').innerHTML = found.Buff2 +" " +found.B2 +"%";
    }
    if (found.Buff3 != null){
        document.getElementById(caseID +'buff3').innerHTML = found.Buff3 +" " +found.B3 +"%";
    }
}

function clearModTiles(caseID){
    for (var i = 1; i <= 9; i++){
        document.getElementById(caseID +"-" +i).style = "";
    }
}

function displayModSkills(caseID){
    var found;
    switch (caseID){
        case 1:
            found = _MODSKILLS.find(e => e.ID === _FOUNDDOLL1.ID);
            document.getElementById(caseID +'skill1Name').innerHTML = found.Skill1 +" 🛈<span class='skillInfoText'>" +found.Description1 +"</span>";
            document.getElementById(caseID +'ICD1').innerHTML = "ICD: " +found.ICooldown +"s";
            document.getElementById(caseID +'CD1').innerHTML = "CD: " +found.Cooldown +"s";
            document.getElementById(caseID +'skill2').hidden = false;
            document.getElementById(caseID +'skill2Name').innerHTML = found.Skill2 +" 🛈<span class='skillInfoText'>" +found.Description2 +"</span>";
            break;
        case 2:
            found = _MODSKILLS.find(e => e.ID === _FOUNDDOLL2.ID);
            break;
        case 3:
            found = _MODSKILLS.find(e => e.ID === _FOUNDDOLL3.ID);
            break;
        case 4:
            found = _MODSKILLS.find(e => e.ID === _FOUNDDOLL4.ID);
            break;
        case 5:
            found = _MODSKILLS.find(e => e.ID === _FOUNDDOLL5.ID);
            break;
    }
}

function displayModdedModStats(caseID){
    var modDMG = Math.round(_MODDOLLFOUND.DMG * ((100 + parseInt(document.getElementById(caseID +"dmgMod").getAttribute("value")))/100));
    document.getElementById("modDMG" +caseID).innerHTML = modDMG;
    document.getElementById("modDMG" +caseID).setAttribute("Value", modDMG);

    var modEVA = Math.floor(_MODDOLLFOUND.EVA * ((100 + parseInt(document.getElementById(caseID +"evaMod").getAttribute("value")))/100));
    document.getElementById("modEVA" +caseID).innerHTML = modEVA;
    document.getElementById("modEVA" +caseID).setAttribute("Value", modEVA);

    var modACC = Math.floor(_MODDOLLFOUND.ACC * ((100 + parseInt(document.getElementById(caseID +"accMod").getAttribute("value")))/100));
    document.getElementById("modACC" +caseID).innerHTML = modACC;
    document.getElementById("modACC" +caseID).setAttribute("Value", modACC);

    var rofCheck = Math.floor(_MODDOLLFOUND.ROF * ((100 + parseInt(document.getElementById(caseID +"rofMod").getAttribute("value")))/100));
    document.getElementById("modROF" +caseID).innerHTML = rofCheck;
    document.getElementById("modROF" +caseID).setAttribute("Value", rofCheck);
    if (rofCheck >= 116 && _MODDOLLFOUND.Type != "MG"){
        document.getElementById("rofWarning" +caseID).innerHTML = "⚠<span class='warningText'>Over ROF breakpoint (116) <br> Further ROF buffs will not matter</span>";
    }
    else if (_MODDOLLFOUND.Type == "SG" && rofCheck >= 50){
        document.getElementById("rofWarning" +caseID).innerHTML = "⚠<span class='warningText'>Over ROF breakpoint (50) <br> Further ROF buffs will not matter</span>";
    }
    else{
        document.getElementById("rofWarning" +caseID).innerHTML = "-";
    }

    var modMOV = _MODDOLLFOUND.Move + parseInt(document.getElementById(caseID +"movMod").getAttribute("value"));
    document.getElementById("modMOV" +caseID).innerHTML = modMOV;
    document.getElementById("modMOV" +caseID).setAttribute("Value", modMOV);
    
    var modARM = _MODDOLLFOUND.Armor + parseInt(document.getElementById(caseID +"armMod").getAttribute("value"));
    document.getElementById("modARM" +caseID).innerHTML = modARM;
    document.getElementById("modARM" +caseID).setAttribute("Value", modARM);

    var crtCheck = Math.round(_MODDOLLFOUND.CritRate * ((100 + parseInt(document.getElementById(caseID +"crtMod").getAttribute("value")))/100));
    document.getElementById("modCRT" +caseID).innerHTML = crtCheck;
    document.getElementById("modCRT" +caseID).setAttribute("Value", crtCheck);
    if (crtCheck >= 100){
        document.getElementById("crtWarning" +caseID).innerHTML = "⚠<span class='warningText'>Over Crit breakpoint (100) <br> Further Crit buffs will not matter</span>";
    }
    else{
        document.getElementById("crtWarning" +caseID).innerHTML = "-";
    }

    var modCDM = Math.round(_MODDOLLFOUND.CritDamage * ((100 + parseInt(document.getElementById(caseID +"cdmMod").getAttribute("value")))/100));
    document.getElementById("modCDM" +caseID).innerHTML = modCDM;
    document.getElementById("modCDM" +caseID).setAttribute("Value", modCDM);

    var modARP = Math.round(_MODDOLLFOUND.AP * ((100 + parseInt(document.getElementById(caseID +"arpMod").getAttribute("value")))/100));
    document.getElementById("modARP" +caseID).innerHTML = modARP;
    document.getElementById("modARP" +caseID).setAttribute("Value", modARP);

    var modCLP = Math.round(_MODDOLLFOUND.Clip * ((100 + parseInt(document.getElementById(caseID +"clpMod").getAttribute("value")))/100));;
    if (_MODDOLLFOUND.Clip != null){
        document.getElementById("modCLP" +caseID).innerHTML = modCLP;
        document.getElementById("modCLP" +caseID).setAttribute("Value", modCLP);
    }
    else {
        document.getElementById("modCLP" +caseID).innerHTML = "∞";
        document.getElementById("modCLP" +caseID).setAttribute("Value", 0);
    }
}