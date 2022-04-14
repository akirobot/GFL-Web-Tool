var _FOUNDDOLL1;
var _FOUNDDOLL2;
var _FOUNDDOLL3;
var _FOUNDDOLL4;
var _FOUNDDOLL5;

//Find specified doll from selection with given variables
//EditID - Where to display final doll data
//AppendID - Where to attach doll data to
//CaseID - Condition for determining where loaded data will be stored
function findDoll(editID, appendID, caseID){
    //Clear current data from display
    clearSelect(editID);

    //Get the currently selected doll from select dropdown
    var idSearch = document.getElementById(appendID);

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

    //Create element div for data display
    //  Note: I think this could be shortened to a separate function with conditions, will test later
    let idNode = document.createElement('div');
    idNode.className = "ID";
    idNode.id = editID;
    idNode.innerHTML = "ID: " +dollToFill.ID +"<br>" ;
    document.getElementById(editID).append(idNode);

    /*let naNode = document.createElement('div');
    naNode.className = "Name";
    naNode.id = editID;
    naNode.innerHTML = "Name: " +dollToFill.Name +"<br>" ;
    document.getElementById(editID).append(naNode);*/
    
    /*let tyNode = document.createElement('div');
    tyNode.className = "Type";
    tyNode.id = editID;
    tyNode.innerHTML = "Type: " +dollToFill.Type +"<br>" ;
    document.getElementById(editID).append(tyNode);*/
    
    /*let stNode = document.createElement('div');
    stNode.className = "Star";
    stNode.id = editID;
    stNode.innerHTML = "Star: " +dollToFill.Star +"<br>" ;
    document.getElementById(editID).append(stNode);*/

    let heNode = document.createElement('div');
    heNode.className = "Health";
    heNode.id = editID;
    heNode.innerHTML = "Health: " +dollToFill.Health +"<br>" ;
    document.getElementById(editID).append(heNode);

    let amNode = document.createElement('div');
    amNode.className = "Ammo";
    amNode.id = editID;
    amNode.innerHTML = "Ammo: " +dollToFill.Ammo +"<br>" ;
    document.getElementById(editID).append(amNode);

    let raNode = document.createElement('div');
    raNode.className = "Ration";
    raNode.id = editID;
    raNode.innerHTML = "Ration: " +dollToFill.Ration +"<br>" ;
    document.getElementById(editID).append(raNode);

    let dmgNode = document.createElement('div');
    dmgNode.className = "DMG";
    dmgNode.id = editID;
    dmgNode.innerHTML = "DMG: " +dollToFill.DMG +"<br>" ;
    document.getElementById(editID).append(dmgNode);

    let evaNode = document.createElement('div');
    evaNode.className = "EVA";
    evaNode.id = editID;
    evaNode.innerHTML = "EVA: " +dollToFill.EVA +"<br>" ;
    document.getElementById(editID).append(evaNode);

    let accNode = document.createElement('div');
    accNode.className = "ACC";
    accNode.id = editID;
    accNode.innerHTML = "ACC: " +dollToFill.ACC +"<br>" ;
    document.getElementById(editID).append(accNode);

    let rofNode = document.createElement('div');
    rofNode.className = "ROF";
    rofNode.id = editID;
    rofNode.innerHTML = "ROF: " +dollToFill.ROF +"<br>" ;
    document.getElementById(editID).append(rofNode);

    let moveNode = document.createElement('div');
    moveNode.className = "Move";
    moveNode.id = editID;
    moveNode.innerHTML = "Move: " +dollToFill.Move +"<br>" ;
    document.getElementById(editID).append(moveNode);

    let armorNode = document.createElement('div');
    armorNode.className = "Armor";
    armorNode.id = editID;
    armorNode.innerHTML = "Armor: " +dollToFill.Armor +"<br>" ;
    document.getElementById(editID).append(armorNode);

    let critrateNode = document.createElement('div');
    critrateNode.className = "CritRate";
    critrateNode.id = editID;
    critrateNode.innerHTML = "CritRate: " +dollToFill.CritRate +"<br>";
    document.getElementById(editID).append(critrateNode);

    let critdmgNode = document.createElement('div');
    critdmgNode.className = "CritDmg";
    critdmgNode.id = editID;
    critdmgNode.innerHTML = "CritDmg: " +dollToFill.CritDamage +"<br>";
    document.getElementById(editID).append(critdmgNode);
    
    let apNode = document.createElement('div');
    apNode.className = "AP";
    apNode.id = editID;
    apNode.innerHTML = "AP: " +dollToFill.AP +"<br>";
    document.getElementById(editID).append(apNode);

    //Check if doll has clip field, if not skip
    if (dollToFill.Clip != null){
        let clipNode = document.createElement('div');
        clipNode.className = "Clip";
        clipNode.id = editID;
        clipNode.innerHTML = "Clip: " +dollToFill.Clip +"<br>";
        document.getElementById(editID).append(clipNode);
    }

    //Switch case to attach data to global variable for use later
    switch (caseID){
        case '1':
            _FOUNDDOLL1 = dollToFill;
            console.log("Updated doll 1: "+_FOUNDDOLL1.Name);
            break;
        case '2':
            _FOUNDDOLL2 = dollToFill;
            console.log("Updated doll 2: "+_FOUNDDOLL2.Name);
            break;
        case '3':
            _FOUNDDOLL3 = dollToFill;
            console.log("Updated doll 3: "+_FOUNDDOLL3.Name);
            break;
        case '4':
            _FOUNDDOLL4 = dollToFill;
            console.log("Updated doll 4: "+_FOUNDDOLL4.Name);
            break;
        case '5':
            _FOUNDDOLL5 = dollToFill;
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