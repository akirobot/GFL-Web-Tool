var _FAIRY = [
    {ID:1, Name:'Warrior Fairy', CritDamage:0, DMG:25, ACC:80, EVA:40, Armor:10, Cost:1, CD:0, Skill:"Combat Efficiency", Description:"In the next battle, increases the Echelon's damage by 20% and rate of fire by 10% for 20 seconds (does not stack)."},
    {ID:2, Name:'Fury Fairy', CritDamage:40, DMG:15, ACC:0, EVA:40, Armor:10, Cost:1, CD:0, Skill:"Unlimited Rage", Description:"In the next battle, increase the Echelon's accuracy by 50% and critical rate by 25% for 20 seconds (does not stack)."},
    {ID:3, Name:'Armor Fairy', CritDamage:22, DMG:22, ACC:0, EVA:0, Armor:25, Cost:3, CD:0, Skill:"Riot Control", Description:"In the next battle, increase the armor of all SGs in the Echelon by 50% for 20 seconds."},
    {ID:4, Name:'Shield Fairy', CritDamage:0, DMG:20, ACC:60, EVA:80, Armor:0, Cost:3, CD:0, Skill:"Energy Shield", Description:"In the next battle, grants a shield to all SMGs in the Echelon. Each shield can absorb up to 150 points of damage."},
    {ID:5, Name:'Defense Fairy', CritDamage:0, DMG:22, ACC:0, EVA:80, Armor:20, Cost:5, CD:1, Skill:"Temporary Armor", Description:"For 1 turn, reduce the dmaage taken by the Echelon by 30% for 20 seconds in all battles."},
    {ID:6, Name:'Taunt Fairy', CritDamage:25, DMG:18, ACC:58, EVA:28, Armor:8, Cost:3, CD:0, Skill:"Taunt Target", Description:"In the next battle, deply a target dummy to attract enemy fire. The dummy will have 1600 HP."},
    {ID:7, Name:'Sniper Fairy', CritDamage:36, DMG:0, ACC:88, EVA:28, Armor:15, Cost:2, CD:0, Skill:"Sniper Command", Description:"In the next battle, aim at the enemy with the highest HP and inflict 20000 damage."},
    {ID:8, Name:'Artillery Fairy', CritDamage:0, DMG:55, ACC:0, EVA:56, Armor:6, Cost:3, CD:0, Skill:"Bombard Command", Description:"In the next battle, launch a mortar shell that deals 1200 damage to enemies within a radius of 2.5 tiles."},
    {ID:9, Name:'Airstrike Fairy', CritDamage:0, DMG:30, ACC:50, EVA:40, Armor:10, Cost:3, CD:0, Skill:"Fatal Air Raid", Description:"In the next battle, call in an airstrike when the battle starts, dealing 500 damage to all enemies."},
    {ID:10, Name:'Reinforcement Fairy', CritDamage:15, DMG:12, ACC:0, EVA:88, Armor:12, Cost:2, CD:1, Skill:"T-Doll Reinforcement", Description:"Reinforce the T-Doll with the lowest HP % in the Echelon with one dummy and increase the Echelon's evasion by 10% for 20 seconds in all battles for one turn."},
    {ID:11, Name:'Parachute Fairy', CritDamage:40, DMG:36, ACC:0, EVA:32, Armor:8, Cost:5, CD:5, Skill:"Landing Zone Liberation", Description:"The Echelon can parachute to any unoccupied LZ within any nodes but the Echelon will have its DMG, ACC, EVA, Armour and Crit Rate reduced by 40% for two turns."},
    {ID:12, Name:'Landmine Fairy', CritDamage:0, DMG:25, ACC:44, EVA:85, Armor:0, Cost:5, CD:3, Skill:"Mine Front", Description:"Bury a mine in an adjacent empty node that lasts for two turns. Enemies who step on the mine will receive damage equal to 50% of their current HP. Ineffective against bosses."},
    {ID:13, Name:'Rocket Fairy', CritDamage:35, DMG:0, ACC:44, EVA:0, Armor:22, Cost:10, CD:3, Skill:"Front Reaper", Description:"Deploy a rocket launcher that has three rockets in total and lasts for two turns. When enemies move within a range of two nodes, they will receive damage equal to 20% of their current HP. Ineffective against bosses."},
    {ID:14, Name:'Construction Fairy', CritDamage:20, DMG:15, ACC:50, EVA:40, Armor:10, Cost:5, CD:3, Skill:"Emergency Bunker", Description:"Build an immovable fortress at this node. Any allies conducting battle on this node within three turns will gain 30% DMG, ACC, EVA, Armour and Crit rate."},
    {ID:15, Name:'Command Fairy', CritDamage:36, DMG:36, ACC:0, EVA:32, Armor:8, Cost:1, CD:0, Skill:"EXP Overload", Description:"Increase the EXP gained by the Echelon in the next battle by 25%. (Doesn't work in EXP Simulations)"},
    {ID:16, Name:'Rescue Fairy', CritDamage:0, DMG:32, ACC:80, EVA:64, Armor:0, Cost:1, CD:0, Skill:"High Efficiency Rescue", Description:"Increases the chance of obtaining a rare T-Doll in the next battle by a huge amount."},
    {ID:17, Name:'Illumination Fairy', CritDamage:38, DMG:0, ACC:90, EVA:32, Armor:8, Cost:5, CD:2, Skill:"Night Illumination", Description:"During Night battles, increase the vision range of the Echelon by 2 nodes and increase the Echelon's accuracy by 30% for 20 seconds in all battles for two turns."},
    {ID:18, Name:'Golden Fairy', CritDamage:25, DMG:20, ACC:62, EVA:50, Armor:12, Cost:0, CD:0, Skill:"Golden Law", Description:"Revelations of destiny shall fill you with determination. (This skill has no effect)"},
    {ID:19, Name:'Cooking Fairy', CritDamage:10, DMG:10, ACC:20, EVA:80, Armor:20, Cost:1, CD:0, Skill:"Chow Time!", Description:"Randomly apply one effect to your Echelon for 30 seconds in the next battle: increase damage by 20%/ increase rate of fire by 20%/ increase accuracy by 30%/ increase evasion by 25%."},
    {ID:20, Name:'Firework Fairy', CritDamage:0, DMG:32, ACC:75, EVA:32, Armor:8, Cost:3, CD:0, Skill:"Summer-End Fireworks", Description:"Color this small piece of the sky and the future red! Increase the echelon's accuracy by 80% for 10 seconds in the next battle."},
    {ID:21, Name:'Nian Fairy', CritDamage:25, DMG:25, ACC:0, EVA:20, Armor:20, Cost:3, CD:0, Skill:"Firecracker", Description:"In the next battle, ignite firecrackers to stun the target for 2 second(s) and deal 50 damage per second to enemies within a radius of 4 of the target for 5 seconds."},
    {ID:22, Name:'Beach Fairy', CritDamage:32, DMG:32, ACC:0, EVA:40, Armor:0, Cost:1, CD:0, Skill:"Slothful Tide", Description:"At the start of the next battle, summon the waves of summer to knockback enemies. Additionally, reduce all enemies' movement speed and rate of fire by 25% for 5 seconds."},
    {ID:23, Name:'Combo Fairy', CritDamage:15, DMG:30, ACC:85, EVA:0, Armor:0, Cost:2, CD:2, Skill:"Ultimate Combo", Description:"In the current round, this echelon gains one stack of Combo before each battle, up to a maximum of three stacks. Each stack lasts for 1 round. Combo effect: When battle begins, raise all allies' damage by 15% and their accuracy by 30% for 20s."},
    {ID:24, Name:'Barrier Fairy', CritDamage:0, DMG:0, ACC:72, EVA:32, Armor:22, Cost:3, CD:0, Skill:"Armor Fortification", Description:"In the next battle, put up a barrier for all armored allies, Each barrier can absorb damage up to 150% of the unit's armor."},
    {ID:25, Name:'Twin Fairy', CritDamage:0, DMG:18, ACC:60, EVA:48, Armor:12, Cost:3, CD:0, Skill:"Double Protection", Description:"In the next battle, summon 2 symbiotic Fairy clones with 750HP, A Shield Fairy clone has 20 armor and deals 150 DMG every two seconds to enemies within a radius of 2 units of the nearest enemy, A Missile Fairy clone has 30 EVA and deals 450 DMG every two seconds to the furthest enemy."},
    {ID:26, Name:'Prototype Fairy', CritDamage:0, DMG:10, ACC:10, EVA:10, Armor:10, Cost:0, CD:0, Skill:"An End to Hesitation", Description:"I entrust my glory and dreams to you. (This skill has no effect)"},
    {ID:27, Name:'Auspicious Fairy', CritDamage:22, DMG:18, ACC:66, EVA:88, Armor:0, Cost:1, CD:3, Skill:"Friendly Exchange of Gifts", Description:"Deploys a peach on an unoccupied node within 2 nodes that lasts for 2 rounds, which can be eaten by both friend or foe. Enemies who eat it receive a 30% damage debuff for 5 seconds in the battle. Allies who eat it receive a +6 point increase to their movement speed for 10 seconds in the next battle."},
    {ID:28, Name:'Desert Fairy', CritDamage:16, DMG:30, ACC:30, EVA:60, Armor:0, Cost:5, CD:3, Skill:"Desert Mirage", Description:"Simulate a desert environment at the specified area, reducing the movement speed by 30% (does not stack with Beach fairy) and rate of fire by 20% of all allies and enemies within. Additionally, reduce accuracy by 10% every 5 seconds, up to 5 stacks. The simulated desert will last for 2 turns. If an echelon is equipped with Desert Fairy, reduce the effects of the desert on that echelon by 100% and grant 20% damage reduction to the leader."},
    {ID:29, Name:'Cheer Fairy', CritDamage:0, DMG:36, ACC:75, EVA:20, Armor:18, Cost:1, CD:0, Skill:"Ardent Cheers", Description:"When a friendly echelon initiates a battle, place a 40% amplifying debuff on all enemy units at the start of the battle, increasing all incoming damage taken for 15 seconds. When the debuff expires, all enemy units will gain a shield with HP that equals 40% of a dummy-link's health, lasting for 5 seconds. When an enemy echelon initiates a battle, grant all friendly units a shield with HP that equals 50% of a dummy-link's health, lasting for 12 seconds. When the shields expire, increase all friendly units' damage according to the ratio of the shield's remaining HP to the dummy-link's health (capped at 50%), lasting for 8 seconds."},
    {ID:30, Name:'Witch Fairy', CritDamage:24, DMG:45, ACC:60, EVA:60, Armor:0, Cost:1, CD:0, Skill:"Black Potion", Description:"In the next battle, deal 150 fixed damage to all enemies that ignores armour and evasion, and inflict Corrosion status. Deal corrosion damage equal to 10% of lost HP every 3 seconds. Corrosion damage ignores armor, evasion and HP shields, and caps at 9999 damage, but will not kill the enemy."},
    {ID:31, Name:'Trap Fairy', CritDamage:22, DMG:27, ACC:54, EVA:0, Armor:0, Cost:2, CD:2, Skill:"Reinforced Beast Trap", Description:"Create a trap that lasts for 1 turn on an empty space within 2 nodes. Enemy units entering the trap are dealt damage equal to 15% of their current HP and cannot move for 1 turn. Boss units will not take damage."},
    {ID:1001, Name:'Yae Sakura', CritDamage:32, DMG:26, ACC:0, EVA:24, Armor:6, Cost:3, CD:0, Skill:"Higoku Sense", Description:"Summons flaming pillars on random locations after entering combat, pillars lasts for 2 seconds while it deals damage over time to any enemies that makes contact with it."},
    {ID:1002, Name:'Kaguya Hime', CritDamage:32, DMG:0, ACC:70, EVA:24, Armor:15, Cost:8, CD:0, Skill:"Yatakikou", Description:"Casts laser beam that deals 20% damage to random enemies within a 2 node radius of the equipped Echelon's position (does not affect bosses)."},
    {ID:1003, Name:'Chloe', CritDamage:0, DMG:18, ACC:55, EVA:64, Armor:6, Cost:2, CD:0, Skill:"Puppets of Sorrow", Description:"Summons two puppets with 600HP in fron of the echelon in the next fight, the puppets will deal flat 100 damage to all enemies every 3 seconds while being able to block damage for the squad."},
    {ID:1004, Name:'Suee', CritDamage:30, DMG:0, ACC:0, EVA:70, Armor:18, Cost:3, CD:2, Skill:"I Want You", Description:"Scatter flowers on an adjacent node that is unoccupied by the enemy. Allies will gain 20% damage, accuracy, evasion, armor, and crit rate when battling on this node for the next two turns."},
    {ID:1005, Name:'Sehra & Nina', CritDamage:20, DMG:15, ACC:40, EVA:50, Armor:0, Cost:1, CD:0, Skill:"Ladymade Star", Description:"In the next battle, increase the Echelon's damage by 20% and decreases all enemies' accuracy by 10% for 20 seconds."},
    {ID:1006, Name:'Preiya & Camilla', CritDamage:22, DMG:22, ACC:50, EVA:10, Armor:10, Cost:1, CD:0, Skill:"Oblivion", Description:"In the next battle for 30 seconds, allies standing on the special red tiles will gain 30% damage and accuracy, but lose 20% evasion and armor, and allies standing on the special yellow tiles will gain 30% evasion and armor but lose 20% damage and accuracy"},
    {ID:1007, Name:'Anna Graem', CritDamage:0, DMG:25, ACC:30, EVA:65, Armor:8, Cost:1, CD:0, Skill:"Nano Ghost", Description:"In the next battle, T-Dolls in the front column gain 30% evasion, but lose 20% damage while other T-Dolls gain 20% damage but lose 30% evasion for 20 seconds."},
    {ID:1008, Name:'Kouji', CritDamage:0, DMG:18, ACC:28, EVA:65, Armor:17, Cost:1, CD:0, Skill:"Snowy Fantasy World", Description:"Reduces both sides' rate of fire by 30% and applying a 30% amplification debuff, increasing incoming damage taken until the battle ends. When the enemy loses a dummy link, reduce their damage by 10% for 15s, stacking up to 3 times."}
];

function populateFairy(){
    var select = document.getElementById("fairySearch");
    var options = _FAIRY;
    for (var i = 0; i < options.length; i++){
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt.Name;
        el.value = opt.ID;
        el.id = 'farTemp';
        select.appendChild(el);
    }
    findFairy();
}

var _FOUNDFAIRY

function findFairy(){
    clearSelect("displayFairy");
    var idSearch = document.getElementById("fairySearch");
    for (var i = 0; i < _FAIRY.length; i++){
        if (_FAIRY[i].ID == idSearch.value){
            _FOUNDFAIRY = _FAIRY[i];
        }
    }

    let idNode = document.createElement('div');
    idNode.className = "ID";
    idNode.id = "displayFairy";
    idNode.innerHTML = "ID: " +_FOUNDFAIRY.ID +"<br>";
    document.getElementById("displayFairy").append(idNode);

    /*let naNode = document.createElement('div');
    naNode.className = "Name";
    naNode.id = "displayFairy";
    naNode.innerHTML = "Name: " +_FOUNDFAIRY.Name +"<br>";
    document.getElementById("displayFairy").append(naNode);*/

    let critdNode = document.createElement('div');
    critdNode.className = "CritDmg";
    critdNode.id = "displayFairy";
    critdNode.innerHTML = "CritDmg: " +_FOUNDFAIRY.CritDamage +"<br>";
    document.getElementById("displayFairy").append(critdNode);

    let dmgNode = document.createElement('div');
    dmgNode.className = "DMG";
    dmgNode.id = "displayFairy";
    dmgNode.innerHTML = "DMG: " +_FOUNDFAIRY.DMG +"<br>";
    document.getElementById("displayFairy").append(dmgNode);

    let accNode = document.createElement('div');
    accNode.className = "ACC";
    accNode.id = "displayFairy";
    accNode.innerHTML = "ACC: " +_FOUNDFAIRY.ACC +"<br>";
    document.getElementById("displayFairy").append(accNode);

    let evaNode = document.createElement('div');
    evaNode.className = "EVA";
    evaNode.id = "displayFairy";
    evaNode.innerHTML = "EVA: " +_FOUNDFAIRY.EVA +"<br>";
    document.getElementById("displayFairy").append(evaNode);

    let armNode = document.createElement('div');
    armNode.className = "Armor";
    armNode.id = "displayFairy";
    armNode.innerHTML = "Armor: " +_FOUNDFAIRY.Armor +"<br>";
    document.getElementById("displayFairy").append(armNode);

    let cdNode = document.createElement('div');
    cdNode.className = "Cooldown";
    cdNode.id = "displayFairy";
    cdNode.innerHTML = "Cooldown: " +_FOUNDFAIRY.CD +"<br>";
    document.getElementById("displayFairy").append(cdNode);

    let skillNode = document.createElement('div');
    skillNode.className = "Skill";
    skillNode.id = "displayFairy";
    skillNode.innerHTML = "Skill: " +_FOUNDFAIRY.Skill +"<br>";
    document.getElementById("displayFairy").append(skillNode);

    let descNode = document.createElement('div');
    descNode.className = "Description";
    descNode.id = "displayFairy";
    descNode.innerHTML = "Description: " +_FOUNDFAIRY.Description +"<br>";
    document.getElementById("displayFairy").append(descNode);
}