var _FOUNDDOLL;

function findDoll(){
    clearSelect("displayStats");
    var _FOUNDDOLL;
    var idSearch = document.getElementById('dollPick');
    console.log(idSearch.value);
    for(var i = 0; i < _DOLLS.length; i++){
        if (_DOLLS[i].ID == idSearch.value){
            _FOUNDDOLL = _DOLLS[i];
        }
    }

    let idNode = document.createElement('div');
    idNode.className = "ID";
    idNode.id = "displayStats";
    idNode.innerHTML = "ID: " +_FOUNDDOLL.ID +"<br>" ;
    document.getElementById('displayStats').append(idNode);

    let naNode = document.createElement('div');
    naNode.className = "Name";
    naNode.id = "displayStats";
    naNode.innerHTML = "Name: " +_FOUNDDOLL.Name +"<br>" ;
    document.getElementById('displayStats').append(naNode);
    
    let tyNode = document.createElement('div');
    tyNode.className = "Type";
    tyNode.id = "displayStats";
    tyNode.innerHTML = "Type: " +_FOUNDDOLL.Type +"<br>" ;
    document.getElementById('displayStats').append(tyNode);

    let heNode = document.createElement('div');
    heNode.className = "Health";
    heNode.id = "displayStats";
    heNode.innerHTML = "Health: " +_FOUNDDOLL.Health +"<br>" ;
    document.getElementById('displayStats').append(heNode);

    let amNode = document.createElement('div');
    amNode.className = "Ammo";
    amNode.id = "displayStats";
    amNode.innerHTML = "Ammo: " +_FOUNDDOLL.Ammo +"<br>" ;
    document.getElementById('displayStats').append(amNode);

    let raNode = document.createElement('div');
    raNode.className = "Ration";
    raNode.id = "displayStats";
    raNode.innerHTML = "Ration: " +_FOUNDDOLL.Ration +"<br>" ;
    document.getElementById('displayStats').append(raNode);

    let dmgNode = document.createElement('div');
    dmgNode.className = "DMG";
    dmgNode.id = "displayStats";
    dmgNode.innerHTML = "DMG: " +_FOUNDDOLL.DMG +"<br>" ;
    document.getElementById('displayStats').append(dmgNode);

    let evaNode = document.createElement('div');
    evaNode.className = "EVA";
    evaNode.id = "displayStats";
    evaNode.innerHTML = "EVA: " +_FOUNDDOLL.EVA +"<br>" ;
    document.getElementById('displayStats').append(evaNode);
}