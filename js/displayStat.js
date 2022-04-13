var deleteID;
var foundDoll;
var appendID;

function findDoll(foundDoll, deleteID, appendID){
    clearSelect("displayStats");
    var _FOUNDDOLL1;
    var idSearch = document.getElementById('dollPick');
    console.log(idSearch.value);
    for(var i = 0; i < _DOLLS.length; i++){
        if (_DOLLS[i].ID == idSearch.value){
            _FOUNDDOLL1 = _DOLLS[i];
        }
    }

    let idNode = document.createElement('div');
    idNode.className = "ID";
    idNode.id = "displayStats";
    idNode.innerHTML = "ID: " +_FOUNDDOLL1.ID +"<br>" ;
    document.getElementById('displayStats').append(idNode);

    let naNode = document.createElement('div');
    naNode.className = "Name";
    naNode.id = "displayStats";
    naNode.innerHTML = "Name: " +_FOUNDDOLL1.Name +"<br>" ;
    document.getElementById('displayStats').append(naNode);
    
    let tyNode = document.createElement('div');
    tyNode.className = "Type";
    tyNode.id = "displayStats";
    tyNode.innerHTML = "Type: " +_FOUNDDOLL1.Type +"<br>" ;
    document.getElementById('displayStats').append(tyNode);
    
    let stNode = document.createElement('div');
    stNode.className = "Star";
    stNode.id = "displayStats";
    stNode.innerHTML = "Star: " +_FOUNDDOLL1.Star +"<br>" ;
    document.getElementById('displayStats').append(stNode);

    let heNode = document.createElement('div');
    heNode.className = "Health";
    heNode.id = "displayStats";
    heNode.innerHTML = "Health: " +_FOUNDDOLL1.Health +"<br>" ;
    document.getElementById('displayStats').append(heNode);

    let amNode = document.createElement('div');
    amNode.className = "Ammo";
    amNode.id = "displayStats";
    amNode.innerHTML = "Ammo: " +_FOUNDDOLL1.Ammo +"<br>" ;
    document.getElementById('displayStats').append(amNode);

    let raNode = document.createElement('div');
    raNode.className = "Ration";
    raNode.id = "displayStats";
    raNode.innerHTML = "Ration: " +_FOUNDDOLL1.Ration +"<br>" ;
    document.getElementById('displayStats').append(raNode);

    let dmgNode = document.createElement('div');
    dmgNode.className = "DMG";
    dmgNode.id = "displayStats";
    dmgNode.innerHTML = "DMG: " +_FOUNDDOLL1.DMG +"<br>" ;
    document.getElementById('displayStats').append(dmgNode);

    let evaNode = document.createElement('div');
    evaNode.className = "EVA";
    evaNode.id = "displayStats";
    evaNode.innerHTML = "EVA: " +_FOUNDDOLL1.EVA +"<br>" ;
    document.getElementById('displayStats').append(evaNode);

    let accNode = document.createElement('div');
    accNode.className = "ACC";
    accNode.id = "displayStats";
    accNode.innerHTML = "ACC: " +_FOUNDDOLL1.ACC +"<br>" ;
    document.getElementById('displayStats').append(accNode);

    let rofNode = document.createElement('div');
    rofNode.className = "ROF";
    rofNode.id = "displayStats";
    rofNode.innerHTML = "ROF: " +_FOUNDDOLL1.ROF +"<br>" ;
    document.getElementById('displayStats').append(rofNode);

    let moveNode = document.createElement('div');
    moveNode.className = "Move";
    moveNode.id = "displayStats";
    moveNode.innerHTML = "Move: " +_FOUNDDOLL1.Move +"<br>" ;
    document.getElementById('displayStats').append(moveNode);

    let armorNode = document.createElement('div');
    armorNode.className = "Armor";
    armorNode.id = "displayStats";
    armorNode.innerHTML = "Armor: " +_FOUNDDOLL1.Armor +"<br>" ;
    document.getElementById('displayStats').append(armorNode);

    let critrateNode = document.createElement('div');
    critrateNode.className = "CritRate";
    critrateNode.id = "displayStats";
    critrateNode.innerHTML = "CritRate: " +_FOUNDDOLL1.CritRate +"<br>";
    document.getElementById('displayStats').append(critrateNode);

    let critdmgNode = document.createElement('div');
    critdmgNode.className = "CritDmg";
    critdmgNode.id = "displayStats";
    critdmgNode.innerHTML = "CritDmg: " +_FOUNDDOLL1.CritDamage +"<br>";
    document.getElementById('displayStats').append(critdmgNode);
    
    let apNode = document.createElement('div');
    apNode.className = "AP";
    apNode.id = "displayStats";
    apNode.innerHTML = "AP: " +_FOUNDDOLL1.AP +"<br>";
    document.getElementById('displayStats').append(apNode);

    if (_FOUNDDOLL1.Clip != null){
        let clipNode = document.createElement('div');
        clipNode.className = "Clip";
        clipNode.id = "displayStats";
        clipNode.innerHTML = "Clip: " +_FOUNDDOLL1.Clip +"<br>";
        document.getElementById('displayStats').append(clipNode);
    }
}