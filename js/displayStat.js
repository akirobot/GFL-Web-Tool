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
    appendNode("ID", editID, dollToFill.ID);
    appendNode("Health", editID, dollToFill.Health);
    appendNode("Ammo", editID, dollToFill.Ammo);
    appendNode("Ration", editID, dollToFill.Ration);
    appendNode("DMG", editID, dollToFill.DMG);
    appendNode("EVA", editID, dollToFill.EVA);
    appendNode("ACC", editID, dollToFill.ACC);
    appendNode("ROF", editID, dollToFill.ROF);
    appendNode("Move", editID, dollToFill.Move);
    appendNode("Armor", editID, dollToFill.Armor);
    appendNode("CritRate", editID, dollToFill.CritRate);
    appendNode("CritDmg", editID, dollToFill.CritDamage);
    appendNode("AP", editID, dollToFill.AP);

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

function appendNode(className, editId, infoToFill){
    /*console.log("className:" +className);
    console.log("editId:" +editId);
    console.log("infoToFill:" +infoToFill.Name);*/
    let Node = document.createElement('div');
    Node.className = className;
    Node.id = editId;
    Node.innerHTML = className +": " +infoToFill +"<br>";
    /*console.log("Node.className: " +Node.className);
    console.log("Node.id: " +Node.id);
    console.log("Node.innerHTML: " +Node.innerHTML);*/
    document.getElementById(editId).append(Node);
}