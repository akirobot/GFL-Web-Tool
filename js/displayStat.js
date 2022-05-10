function displayStats(caseID){
    switch (caseID){
        case 1:
            document.getElementById("ID1").innerHTML = _SELECTDOLL1.ID;
            document.getElementById("HP1").innerHTML = "HP: " +_SELECTDOLL1.Health;
            document.getElementById("Ammo1").innerHTML = "Ammo: " +_SELECTDOLL1.Ammo;
            document.getElementById("Ration1").innerHTML = "Ration: " +_SELECTDOLL1.Ration;
            document.getElementById("DMG1").innerHTML = _SELECTDOLL1.DMG;
            document.getElementById("EVA1").innerHTML = _SELECTDOLL1.EVA;
            document.getElementById("ACC1").innerHTML = _SELECTDOLL1.ACC;
            document.getElementById("ROF1").innerHTML = _SELECTDOLL1.ROF;
            document.getElementById("MOV1").innerHTML = _SELECTDOLL1.Move;
            document.getElementById("ARM1").innerHTML = _SELECTDOLL1.Armor;
            document.getElementById("CRT1").innerHTML = _SELECTDOLL1.CritRate;
            document.getElementById("CDM1").innerHTML = _SELECTDOLL1.CritDamage;
            document.getElementById("ARP1").innerHTML = _SELECTDOLL1.AP;
            document.getElementById("ROF1").innerHTML = _SELECTDOLL1.ROF;
            if (_SELECTDOLL1.Clip != null) {
                document.getElementById("CLP1").innerHTML = _SELECTDOLL1.Clip;
            }
            else {
                document.getElementById("CLP1").innerHTML = '∞';
            }
            break;
        case 2:
            document.getElementById("ID2").innerHTML = _SELECTDOLL2.ID;
            document.getElementById("HP2").innerHTML = "HP: " +_SELECTDOLL2.Health;
            document.getElementById("Ammo2").innerHTML = "Ammo: " +_SELECTDOLL2.Ammo;
            document.getElementById("Ration2").innerHTML = "Ration: " +_SELECTDOLL2.Ration;
            document.getElementById("DMG2").innerHTML = _SELECTDOLL2.DMG;
            document.getElementById("EVA2").innerHTML = _SELECTDOLL2.EVA;
            document.getElementById("ACC2").innerHTML = _SELECTDOLL2.ACC;
            document.getElementById("ROF2").innerHTML = _SELECTDOLL2.ROF;
            document.getElementById("MOV2").innerHTML = _SELECTDOLL2.Move;
            document.getElementById("ARM2").innerHTML = _SELECTDOLL2.Armor;
            document.getElementById("CRT2").innerHTML = _SELECTDOLL2.CritRate;
            document.getElementById("CDM2").innerHTML = _SELECTDOLL2.CritDamage;
            document.getElementById("ARP2").innerHTML = _SELECTDOLL2.AP;
            document.getElementById("ROF2").innerHTML = _SELECTDOLL2.ROF;
            if (_SELECTDOLL2.Clip != null) {
                document.getElementById("CLP2").innerHTML = _SELECTDOLL2.Clip;
            }
            else {
                document.getElementById("CLP2").innerHTML = '∞';
            }
            break;
        case 3:
            document.getElementById("ID3").innerHTML = _SELECTDOLL3.ID;
            document.getElementById("HP3").innerHTML = "HP: " +_SELECTDOLL3.Health;
            document.getElementById("Ammo3").innerHTML = "Ammo: " +_SELECTDOLL3.Ammo;
            document.getElementById("Ration3").innerHTML = "Ration: " +_SELECTDOLL3.Ration;
            document.getElementById("DMG3").innerHTML = _SELECTDOLL3.DMG;
            document.getElementById("EVA3").innerHTML = _SELECTDOLL3.EVA;
            document.getElementById("ACC3").innerHTML = _SELECTDOLL3.ACC;
            document.getElementById("ROF3").innerHTML = _SELECTDOLL3.ROF;
            document.getElementById("MOV3").innerHTML = _SELECTDOLL3.Move;
            document.getElementById("ARM3").innerHTML = _SELECTDOLL3.Armor;
            document.getElementById("CRT3").innerHTML = _SELECTDOLL3.CritRate;
            document.getElementById("CDM3").innerHTML = _SELECTDOLL3.CritDamage;
            document.getElementById("ARP3").innerHTML = _SELECTDOLL3.AP;
            document.getElementById("ROF3").innerHTML = _SELECTDOLL3.ROF;
            if (_SELECTDOLL3.Clip != null) {
                document.getElementById("CLP3").innerHTML = _SELECTDOLL3.Clip;
            }
            else {
                document.getElementById("CLP3").innerHTML = '∞';
            }
            break;
        case 4:
            document.getElementById("ID4").innerHTML = _SELECTDOLL4.ID;
            document.getElementById("HP4").innerHTML = "HP: " +_SELECTDOLL4.Health;
            document.getElementById("Ammo4").innerHTML = "Ammo: " +_SELECTDOLL4.Ammo;
            document.getElementById("Ration4").innerHTML = "Ration: " +_SELECTDOLL4.Ration;
            document.getElementById("DMG4").innerHTML = _SELECTDOLL4.DMG;
            document.getElementById("EVA4").innerHTML = _SELECTDOLL4.EVA;
            document.getElementById("ACC4").innerHTML = _SELECTDOLL4.ACC;
            document.getElementById("ROF4").innerHTML = _SELECTDOLL4.ROF;
            document.getElementById("MOV4").innerHTML = _SELECTDOLL4.Move;
            document.getElementById("ARM4").innerHTML = _SELECTDOLL4.Armor;
            document.getElementById("CRT4").innerHTML = _SELECTDOLL4.CritRate;
            document.getElementById("CDM4").innerHTML = _SELECTDOLL4.CritDamage;
            document.getElementById("ARP4").innerHTML = _SELECTDOLL4.AP;
            document.getElementById("ROF4").innerHTML = _SELECTDOLL4.ROF;
            if (_SELECTDOLL4.Clip != null) {
                document.getElementById("CLP4").innerHTML = _SELECTDOLL4.Clip;
            }
            else {
                document.getElementById("CLP4").innerHTML = '∞';
            }
            break;
        case 5:
            document.getElementById("ID5").innerHTML = _SELECTDOLL5.ID;
            document.getElementById("HP5").innerHTML = "HP: " +_SELECTDOLL5.Health;
            document.getElementById("Ammo5").innerHTML = "Ammo: " +_SELECTDOLL5.Ammo;
            document.getElementById("Ration5").innerHTML = "Ration: " +_SELECTDOLL5.Ration;
            document.getElementById("DMG5").innerHTML = _SELECTDOLL5.DMG;
            document.getElementById("EVA5").innerHTML = _SELECTDOLL5.EVA;
            document.getElementById("ACC5").innerHTML = _SELECTDOLL5.ACC;
            document.getElementById("ROF5").innerHTML = _SELECTDOLL5.ROF;
            document.getElementById("MOV5").innerHTML = _SELECTDOLL5.Move;
            document.getElementById("ARM5").innerHTML = _SELECTDOLL5.Armor;
            document.getElementById("CRT5").innerHTML = _SELECTDOLL5.CritRate;
            document.getElementById("CDM5").innerHTML = _SELECTDOLL5.CritDamage;
            document.getElementById("ARP5").innerHTML = _SELECTDOLL5.AP;
            document.getElementById("ROF5").innerHTML = _SELECTDOLL5.ROF;
            if (_SELECTDOLL5.Clip != null) {
                document.getElementById("CLP5").innerHTML = _SELECTDOLL5.Clip;
            }
            else {
                document.getElementById("CLP5").innerHTML = '∞';
            }
            break;
    }
}

