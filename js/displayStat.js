var _FOUNDDOLL;

function findDoll1(){
    clearSelect("displayStats1");
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
    idNode.id = "displayStats1";
    idNode.innerHTML = "ID: " +_FOUNDDOLL.ID +"<br>" ;
    document.getElementById('displayStats1').append(idNode);

    let naNode = document.createElement('div');
    naNode.className = "Name";
    naNode.id = "displayStats1";
    naNode.innerHTML = "Name: " +_FOUNDDOLL.Name +"<br>" ;
    document.getElementById('displayStats1').append(naNode);
    
    let tyNode = document.createElement('div');
    tyNode.className = "Type";
    tyNode.id = "displayStats1";
    tyNode.innerHTML = "Type: " +_FOUNDDOLL.Type +"<br>" ;
    document.getElementById('displayStats1').append(tyNode);

    let heNode = document.createElement('div');
    heNode.className = "Health";
    heNode.id = "displayStats1";
    heNode.innerHTML = "Health: " +_FOUNDDOLL.Health +"<br>" ;
    document.getElementById('displayStats1').append(heNode);

    let amNode = document.createElement('div');
    amNode.className = "Ammo";
    amNode.id = "displayStats1";
    amNode.innerHTML = "Ammo: " +_FOUNDDOLL.Ammo +"<br>" ;
    document.getElementById('displayStats1').append(amNode);

    let raNode = document.createElement('div');
    raNode.className = "Ration";
    raNode.id = "displayStats1";
    raNode.innerHTML = "Ration: " +_FOUNDDOLL.Ration +"<br>" ;
    document.getElementById('displayStats1').append(raNode);

    let dmgNode = document.createElement('div');
    dmgNode.className = "DMG";
    dmgNode.id = "displayStats1";
    dmgNode.innerHTML = "DMG: " +_FOUNDDOLL.DMG +"<br>" ;
    document.getElementById('displayStats1').append(dmgNode);

    let evaNode = document.createElement('div');
    evaNode.className = "EVA";
    evaNode.id = "displayStats1";
    evaNode.innerHTML = "EVA: " +_FOUNDDOLL.EVA +"<br>" ;
    document.getElementById('displayStats1').append(evaNode);

    let accNode = document.createElement('div');
    accNode.className = "ACC";
    accNode.id = "displayStats1";
    accNode.innerHTML = "ACC: " +_FOUNDDOLL.ACC +"<br>" ;
    document.getElementById('displayStats1').append(accNode);

    let rofNode = document.createElement('div');
    rofNode.className = "ROF";
    rofNode.id = "displayStats1";
    rofNode.innerHTML = "ROF: " +_FOUNDDOLL.ROF +"<br>" ;
    document.getElementById('displayStats1').append(rofNode);

    let moveNode = document.createElement('div');
    moveNode.className = "Move";
    moveNode.id = "displayStats1";
    moveNode.innerHTML = "Move: " +_FOUNDDOLL.Move +"<br>" ;
    document.getElementById('displayStats1').append(moveNode);

    let armorNode = document.createElement('div');
    armorNode.className = "Armor";
    armorNode.id = "displayStats1";
    armorNode.innerHTML = "Armor: " +_FOUNDDOLL.Armor +"<br>" ;
    document.getElementById('displayStats1').append(armorNode);

    let critrateNode = document.createElement('div');
    critrateNode.className = "CritRate";
    critrateNode.id = "displayStats1";
    critrateNode.innerHTML = "CritRate: " +_FOUNDDOLL.CritRate +"<br>";
    document.getElementById('displayStats1').append(critrateNode);

    let critdmgNode = document.createElement('div');
    critdmgNode.className = "CritDmg";
    critdmgNode.id = "displayStats1";
    critdmgNode.innerHTML = "CritDmg: " +_FOUNDDOLL.CritDamage +"<br>";
    document.getElementById('displayStats1').append(critdmgNode);
    
    let apNode = document.createElement('div');
    apNode.className = "AP";
    apNode.id = "displayStats1";
    apNode.innerHTML = "AP: " +_FOUNDDOLL.AP +"<br>";
    document.getElementById('displayStats1').append(apNode);

    if (_FOUNDDOLL.Clip != null){
        let clipNode = document.createElement('div');
        clipNode.className = "Clip";
        clipNode.id = "displayStats1";
        clipNode.innerHTML = "Clip: " +_FOUNDDOLL.Clip +"<br>";
        document.getElementById('displayStats1').append(clipNode);
    }
}