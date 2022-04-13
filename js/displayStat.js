var _FOUNDDOLL1;
var _FOUNDDOLL2;
var _FOUNDDOLL3;
var _FOUNDDOLL4;
var _FOUNDDOLL5;

function findDoll(editID, appendID){
    clearSelect(editID);
    var idSearch = document.getElementById(appendID);
    //console.log(idSearch.value);
    for(var i = 0; i < _DOLLS.length; i++){
        if (_DOLLS[i].ID == idSearch.value){
            _FOUNDDOLL1 = _DOLLS[i];
        }
    }

    let idNode = document.createElement('div');
    idNode.className = "ID";
    idNode.id = editID;
    idNode.innerHTML = "ID: " +_FOUNDDOLL1.ID +"<br>" ;
    document.getElementById(editID).append(idNode);

    let naNode = document.createElement('div');
    naNode.className = "Name";
    naNode.id = editID;
    naNode.innerHTML = "Name: " +_FOUNDDOLL1.Name +"<br>" ;
    document.getElementById(editID).append(naNode);
    
    let tyNode = document.createElement('div');
    tyNode.className = "Type";
    tyNode.id = editID;
    tyNode.innerHTML = "Type: " +_FOUNDDOLL1.Type +"<br>" ;
    document.getElementById(editID).append(tyNode);
    
    let stNode = document.createElement('div');
    stNode.className = "Star";
    stNode.id = editID;
    stNode.innerHTML = "Star: " +_FOUNDDOLL1.Star +"<br>" ;
    document.getElementById(editID).append(stNode);

    let heNode = document.createElement('div');
    heNode.className = "Health";
    heNode.id = editID;
    heNode.innerHTML = "Health: " +_FOUNDDOLL1.Health +"<br>" ;
    document.getElementById(editID).append(heNode);

    let amNode = document.createElement('div');
    amNode.className = "Ammo";
    amNode.id = editID;
    amNode.innerHTML = "Ammo: " +_FOUNDDOLL1.Ammo +"<br>" ;
    document.getElementById(editID).append(amNode);

    let raNode = document.createElement('div');
    raNode.className = "Ration";
    raNode.id = editID;
    raNode.innerHTML = "Ration: " +_FOUNDDOLL1.Ration +"<br>" ;
    document.getElementById(editID).append(raNode);

    let dmgNode = document.createElement('div');
    dmgNode.className = "DMG";
    dmgNode.id = editID;
    dmgNode.innerHTML = "DMG: " +_FOUNDDOLL1.DMG +"<br>" ;
    document.getElementById(editID).append(dmgNode);

    let evaNode = document.createElement('div');
    evaNode.className = "EVA";
    evaNode.id = editID;
    evaNode.innerHTML = "EVA: " +_FOUNDDOLL1.EVA +"<br>" ;
    document.getElementById(editID).append(evaNode);

    let accNode = document.createElement('div');
    accNode.className = "ACC";
    accNode.id = editID;
    accNode.innerHTML = "ACC: " +_FOUNDDOLL1.ACC +"<br>" ;
    document.getElementById(editID).append(accNode);

    let rofNode = document.createElement('div');
    rofNode.className = "ROF";
    rofNode.id = editID;
    rofNode.innerHTML = "ROF: " +_FOUNDDOLL1.ROF +"<br>" ;
    document.getElementById(editID).append(rofNode);

    let moveNode = document.createElement('div');
    moveNode.className = "Move";
    moveNode.id = editID;
    moveNode.innerHTML = "Move: " +_FOUNDDOLL1.Move +"<br>" ;
    document.getElementById(editID).append(moveNode);

    let armorNode = document.createElement('div');
    armorNode.className = "Armor";
    armorNode.id = editID;
    armorNode.innerHTML = "Armor: " +_FOUNDDOLL1.Armor +"<br>" ;
    document.getElementById(editID).append(armorNode);

    let critrateNode = document.createElement('div');
    critrateNode.className = "CritRate";
    critrateNode.id = editID;
    critrateNode.innerHTML = "CritRate: " +_FOUNDDOLL1.CritRate +"<br>";
    document.getElementById(editID).append(critrateNode);

    let critdmgNode = document.createElement('div');
    critdmgNode.className = "CritDmg";
    critdmgNode.id = editID;
    critdmgNode.innerHTML = "CritDmg: " +_FOUNDDOLL1.CritDamage +"<br>";
    document.getElementById(editID).append(critdmgNode);
    
    let apNode = document.createElement('div');
    apNode.className = "AP";
    apNode.id = editID;
    apNode.innerHTML = "AP: " +_FOUNDDOLL1.AP +"<br>";
    document.getElementById(editID).append(apNode);

    if (_FOUNDDOLL1.Clip != null){
        let clipNode = document.createElement('div');
        clipNode.className = "Clip";
        clipNode.id = editID;
        clipNode.innerHTML = "Clip: " +_FOUNDDOLL1.Clip +"<br>";
        document.getElementById(editID).append(clipNode);
    }
}