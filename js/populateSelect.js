function init_populateDropdowns(){
    _FOUNDDOLLS1 = _1SHG;
    _FOUNDDOLLS2 = _1SHG;
    _FOUNDDOLLS3 = _1SHG;
    _FOUNDDOLLS4 = _1SHG;
    _FOUNDDOLLS5 = _1SHG;
    init_dupeCheck();
    for (var i = 1; i <= 5; i++){
        init_populateDropdown(i);
    }
}

function init_populateDropdown(caseID){
    clearSelect(caseID);
    var select = document.getElementById('nameSelect' +caseID);
    switch (caseID){
        case 1:
            for (var i = 0; i < _FOUNDDOLLS1.length; i++){
                var el = document.createElement("option");
                el.textContent = _FOUNDDOLLS1[i].Name;
                el.value = _FOUNDDOLLS1[i].ID;
                el.id = 'temp';
                select.appendChild(el);
            }
            break;
        case 2:
            for (var i = 0; i < _FOUNDDOLLS2.length; i++){
                var el = document.createElement("option");
                el.textContent = _FOUNDDOLLS2[i].Name;
                el.value = _FOUNDDOLLS2[i].ID;
                el.id = 'temp';
                select.appendChild(el);
            }
            break;
        case 3:
            for (var i = 0; i < _FOUNDDOLLS3.length; i++){
                var el = document.createElement("option");
                el.textContent = _FOUNDDOLLS3[i].Name;
                el.value = _FOUNDDOLLS3[i].ID;
                el.id = 'temp';
                select.appendChild(el);
            }
            break;
        case 4:
            for (var i = 0; i < _FOUNDDOLLS4.length; i++){
                var el = document.createElement("option");
                el.textContent = _FOUNDDOLLS4[i].Name;
                el.value = _FOUNDDOLLS4[i].ID;
                el.id = 'temp';
                select.appendChild(el);
            }
            break;
        case 5:
            for (var i = 0; i < _FOUNDDOLLS5.length; i++){
                var el = document.createElement("option");
                el.textContent = _FOUNDDOLLS5[i].Name;
                el.value = _FOUNDDOLLS5[i].ID;
                el.id = 'temp';
                select.appendChild(el);
            }
            break;
    }
    displayStats(caseID);
}

function populateDropdowns(caseID){
    switch (caseID){
        case 1:
            for (var i = 0; i < _FOUNDDOLLS1.length; i++){
                if (_FOUNDDOLLS1[i].ID == document.getElementById('nameSelect1').value){
                    _SELECTDOLL1 = _FOUNDDOLLS1[i];
                    break;
                }
            }
            break;
        case 2:
            for (var i = 0; i < _FOUNDDOLLS2.length; i++){
                if (_FOUNDDOLLS2[i].ID == document.getElementById('nameSelect2').value){
                    _SELECTDOLL2 = _FOUNDDOLLS2[i];
                    break;
                }
            }
            break;
        case 3:
            for (var i = 0; i < _FOUNDDOLLS3.length; i++){
                if (_FOUNDDOLLS3[i].ID == document.getElementById('nameSelect3').value){
                    _SELECTDOLL3 = _FOUNDDOLLS3[i];
                    break;
                }
            }
            break;
        case 4:
            for (var i = 0; i < _FOUNDDOLLS4.length; i++){
                if (_FOUNDDOLLS4[i].ID == document.getElementById('nameSelect4').value){
                    _SELECTDOLL4 = _FOUNDDOLLS4[i];
                    break;
                }
            }
            break;
        case 5:
            for (var i = 0; i < _FOUNDDOLLS5.length; i++){
                if (_FOUNDDOLLS5[i].ID == document.getElementById('nameSelect5').value){
                    _SELECTDOLL5 = _FOUNDDOLLS5[i];
                    break;
                }
            }
            break;
        //init_populateDropdown(caseID);
        //dupeCheck();
    }
    
    displayStats(caseID);
}

function findNewArrays(caseID){
    var rarity = document.getElementById('raritySelect' +caseID).value;
    var type = document.getElementById('typeSelect' +caseID).value;
    //Which slot
    switch (caseID){
        case 1:
            //What rarity
            switch (rarity){
                case '1':
                    //What type
                    switch (type){
                        case 'HG':_FOUNDDOLLS1 = _1SHG;break;
                        case 'SMG':_FOUNDDOLLS1 = _1SSMG;break;
                        case 'AR':_FOUNDDOLLS1 = _1SAR;break;
                        case 'RF':_FOUNDDOLLS1 = _1SRF;break;
                        case 'MG':_FOUNDDOLLS1 = _1SMG;break;
                        case 'SG':_FOUNDDOLLS1 = _1SSG;break;
                    }
                    break;
                case '2':
                    switch (type){
                        case 'HG':_FOUNDDOLLS1 = _2SHG;break;
                        case 'SMG':_FOUNDDOLLS1 = _2SSMG;break;
                        case 'AR':_FOUNDDOLLS1 = _2SAR;break;
                        case 'RF':_FOUNDDOLLS1 = _2SRF;break;
                        case 'MG':_FOUNDDOLLS1 = _2SMG;break;
                    }
                    break;
                case '3':
                    switch (type){
                        case 'HG':_FOUNDDOLLS1 = _3SHG;break;
                        case 'SMG':_FOUNDDOLLS1 = _3SSMG;break;
                        case 'AR':_FOUNDDOLLS1 = _3SAR;break;
                        case 'RF':_FOUNDDOLLS1 = _3SRF;break;
                        case 'MG':_FOUNDDOLLS1 = _3SMG;break;
                        case 'SG':_FOUNDDOLLS1 = _3SSG;break;
                    }
                    break;
                case '4':
                    switch (type){
                        case 'HG':_FOUNDDOLLS1 = _4SHG;break;
                        case 'SMG':_FOUNDDOLLS1 = _4SSMG;break;
                        case 'AR':_FOUNDDOLLS1 = _4SAR;break;
                        case 'RF':_FOUNDDOLLS1 = _4SRF;break;
                        case 'MG':_FOUNDDOLLS1 = _4SMG;break;
                        case 'SG':_FOUNDDOLLS1 = _4SSG;break;
                    }
                    break;
                case '5':
                    switch (type){
                        case 'HG':_FOUNDDOLLS1 = _5SHG;break;
                        case 'SMG':_FOUNDDOLLS1 = _5SSMG;break;
                        case 'AR':_FOUNDDOLLS1 = _5SAR;break;
                        case 'RF':_FOUNDDOLLS1 = _5SRF;break;
                        case 'MG':_FOUNDDOLLS1 = _5SMG;break;
                        case 'SG':_FOUNDDOLLS1 = _5SSG;break;
                    }
                    console.log('5 star');
                    break;
            }
            break;
        case 2:
            //What rarity
            switch (rarity){
                case '1':
                    //What type
                    switch (type){
                        case 'HG':_FOUNDDOLLS2 = _1SHG;break;
                        case 'SMG':_FOUNDDOLLS2 = _1SSMG;break;
                        case 'AR':_FOUNDDOLLS2 = _1SAR;break;
                        case 'RF':_FOUNDDOLLS2 = _1SRF;break;
                        case 'MG':_FOUNDDOLLS2 = _1SMG;break;
                        case 'SG':_FOUNDDOLLS2 = _1SSG;break;
                    }
                    break;
                case '2':
                    switch (type){
                        case 'HG':_FOUNDDOLLS2 = _2SHG;break;
                        case 'SMG':_FOUNDDOLLS2 = _2SSMG;break;
                        case 'AR':_FOUNDDOLLS2 = _2SAR;break;
                        case 'RF':_FOUNDDOLLS2 = _2SRF;break;
                        case 'MG':_FOUNDDOLLS2 = _2SMG;break;
                    }
                    break;
                case '3':
                    switch (type){
                        case 'HG':_FOUNDDOLLS2 = _3SHG;break;
                        case 'SMG':_FOUNDDOLLS2 = _3SSMG;break;
                        case 'AR':_FOUNDDOLLS2 = _3SAR;break;
                        case 'RF':_FOUNDDOLLS2 = _3SRF;break;
                        case 'MG':_FOUNDDOLLS2 = _3SMG;break;
                        case 'SG':_FOUNDDOLLS2 = _3SSG;break;
                    }
                    break;
                case '4':
                    switch (type){
                        case 'HG':_FOUNDDOLLS2 = _4SHG;break;
                        case 'SMG':_FOUNDDOLLS2 = _4SSMG;break;
                        case 'AR':_FOUNDDOLLS2 = _4SAR;break;
                        case 'RF':_FOUNDDOLLS2 = _4SRF;break;
                        case 'MG':_FOUNDDOLLS2 = _4SMG;break;
                        case 'SG':_FOUNDDOLLS2 = _4SSG;break;
                    }
                    break;
                case '5':
                    switch (type){
                        case 'HG':_FOUNDDOLLS2 = _5SHG;break;
                        case 'SMG':_FOUNDDOLLS2 = _5SSMG;break;
                        case 'AR':_FOUNDDOLLS2 = _5SAR;break;
                        case 'RF':_FOUNDDOLLS2 = _5SRF;break;
                        case 'MG':_FOUNDDOLLS2 = _5SMG;break;
                        case 'SG':_FOUNDDOLLS2 = _5SSG;break;
                    }
                    console.log('5 star');
                    break;
            }
            break;
        case 3:
            switch (rarity){
                case '1':
                    //What type
                    switch (type){
                        case 'HG':_FOUNDDOLLS3 = _1SHG;break;
                        case 'SMG':_FOUNDDOLLS3 = _1SSMG;break;
                        case 'AR':_FOUNDDOLLS3 = _1SAR;break;
                        case 'RF':_FOUNDDOLLS3 = _1SRF;break;
                        case 'MG':_FOUNDDOLLS3 = _1SMG;break;
                        case 'SG':_FOUNDDOLLS3 = _1SSG;break;
                    }
                    break;
                case '2':
                    switch (type){
                        case 'HG':_FOUNDDOLLS3 = _2SHG;break;
                        case 'SMG':_FOUNDDOLLS3 = _2SSMG;break;
                        case 'AR':_FOUNDDOLLS3 = _2SAR;break;
                        case 'RF':_FOUNDDOLLS3 = _2SRF;break;
                        case 'MG':_FOUNDDOLLS3 = _2SMG;break;
                    }
                    break;
                case '3':
                    switch (type){
                        case 'HG':_FOUNDDOLLS3 = _3SHG;break;
                        case 'SMG':_FOUNDDOLLS3 = _3SSMG;break;
                        case 'AR':_FOUNDDOLLS3 = _3SAR;break;
                        case 'RF':_FOUNDDOLLS3 = _3SRF;break;
                        case 'MG':_FOUNDDOLLS3 = _3SMG;break;
                        case 'SG':_FOUNDDOLLS3 = _3SSG;break;
                    }
                    break;
                case '4':
                    switch (type){
                        case 'HG':_FOUNDDOLLS3 = _4SHG;break;
                        case 'SMG':_FOUNDDOLLS3 = _4SSMG;break;
                        case 'AR':_FOUNDDOLLS3 = _4SAR;break;
                        case 'RF':_FOUNDDOLLS3 = _4SRF;break;
                        case 'MG':_FOUNDDOLLS3 = _4SMG;break;
                        case 'SG':_FOUNDDOLLS3 = _4SSG;break;
                    }
                    break;
                case '5':
                    switch (type){
                        case 'HG':_FOUNDDOLLS3 = _5SHG;break;
                        case 'SMG':_FOUNDDOLLS3 = _5SSMG;break;
                        case 'AR':_FOUNDDOLLS3 = _5SAR;break;
                        case 'RF':_FOUNDDOLLS3 = _5SRF;break;
                        case 'MG':_FOUNDDOLLS3 = _5SMG;break;
                        case 'SG':_FOUNDDOLLS3 = _5SSG;break;
                    }
                    console.log('5 star');
                    break;
            }
            break;
        case 4:
            switch (rarity){
                case '1':
                    //What type
                    switch (type){
                        case 'HG':_FOUNDDOLLS4 = _1SHG;break;
                        case 'SMG':_FOUNDDOLLS4 = _1SSMG;break;
                        case 'AR':_FOUNDDOLLS4 = _1SAR;break;
                        case 'RF':_FOUNDDOLLS4 = _1SRF;break;
                        case 'MG':_FOUNDDOLLS4 = _1SMG;break;
                        case 'SG':_FOUNDDOLLS4 = _1SSG;break;
                    }
                    break;
                case '2':
                    switch (type){
                        case 'HG':_FOUNDDOLLS4 = _2SHG;break;
                        case 'SMG':_FOUNDDOLLS4 = _2SSMG;break;
                        case 'AR':_FOUNDDOLLS4 = _2SAR;break;
                        case 'RF':_FOUNDDOLLS4 = _2SRF;break;
                        case 'MG':_FOUNDDOLLS4 = _2SMG;break;
                    }
                    break;
                case '3':
                    switch (type){
                        case 'HG':_FOUNDDOLLS4 = _3SHG;break;
                        case 'SMG':_FOUNDDOLLS4 = _3SSMG;break;
                        case 'AR':_FOUNDDOLLS4 = _3SAR;break;
                        case 'RF':_FOUNDDOLLS4 = _3SRF;break;
                        case 'MG':_FOUNDDOLLS4 = _3SMG;break;
                        case 'SG':_FOUNDDOLLS4 = _3SSG;break;
                    }
                    break;
                case '4':
                    switch (type){
                        case 'HG':_FOUNDDOLLS4 = _4SHG;break;
                        case 'SMG':_FOUNDDOLLS4 = _4SSMG;break;
                        case 'AR':_FOUNDDOLLS4 = _4SAR;break;
                        case 'RF':_FOUNDDOLLS4 = _4SRF;break;
                        case 'MG':_FOUNDDOLLS4 = _4SMG;break;
                        case 'SG':_FOUNDDOLLS4 = _4SSG;break;
                    }
                    break;
                case '5':
                    switch (type){
                        case 'HG':_FOUNDDOLLS4 = _5SHG;break;
                        case 'SMG':_FOUNDDOLLS4 = _5SSMG;break;
                        case 'AR':_FOUNDDOLLS4 = _5SAR;break;
                        case 'RF':_FOUNDDOLLS4 = _5SRF;break;
                        case 'MG':_FOUNDDOLLS4 = _5SMG;break;
                        case 'SG':_FOUNDDOLLS4 = _5SSG;break;
                    }
                    console.log('5 star');
                    break;
            }
            break;
        case 5:
            switch (rarity){
                case '1':
                    //What type
                    switch (type){
                        case 'HG':_FOUNDDOLLS5 = _1SHG;break;
                        case 'SMG':_FOUNDDOLLS5 = _1SSMG;break;
                        case 'AR':_FOUNDDOLLS5 = _1SAR;break;
                        case 'RF':_FOUNDDOLLS5 = _1SRF;break;
                        case 'MG':_FOUNDDOLLS5 = _1SMG;break;
                        case 'SG':_FOUNDDOLLS5 = _1SSG;break;
                    }
                    break;
                case '2':
                    switch (type){
                        case 'HG':_FOUNDDOLLS5 = _2SHG;break;
                        case 'SMG':_FOUNDDOLLS5 = _2SSMG;break;
                        case 'AR':_FOUNDDOLLS5 = _2SAR;break;
                        case 'RF':_FOUNDDOLLS5 = _2SRF;break;
                        case 'MG':_FOUNDDOLLS5 = _2SMG;break;
                    }
                    break;
                case '3':
                    switch (type){
                        case 'HG':_FOUNDDOLLS5 = _3SHG;break;
                        case 'SMG':_FOUNDDOLLS5 = _3SSMG;break;
                        case 'AR':_FOUNDDOLLS5 = _3SAR;break;
                        case 'RF':_FOUNDDOLLS5 = _3SRF;break;
                        case 'MG':_FOUNDDOLLS5 = _3SMG;break;
                        case 'SG':_FOUNDDOLLS5 = _3SSG;break;
                    }
                    break;
                case '4':
                    switch (type){
                        case 'HG':_FOUNDDOLLS5 = _4SHG;break;
                        case 'SMG':_FOUNDDOLLS5 = _4SSMG;break;
                        case 'AR':_FOUNDDOLLS5 = _4SAR;break;
                        case 'RF':_FOUNDDOLLS5 = _4SRF;break;
                        case 'MG':_FOUNDDOLLS5 = _4SMG;break;
                        case 'SG':_FOUNDDOLLS5 = _4SSG;break;
                    }
                    break;
                case '5':
                    switch (type){
                        case 'HG':_FOUNDDOLLS5 = _5SHG;break;
                        case 'SMG':_FOUNDDOLLS5 = _5SSMG;break;
                        case 'AR':_FOUNDDOLLS5 = _5SAR;break;
                        case 'RF':_FOUNDDOLLS5 = _5SRF;break;
                        case 'MG':_FOUNDDOLLS5 = _5SMG;break;
                        case 'SG':_FOUNDDOLLS5 = _5SSG;break;
                    }
                    console.log('5 star');
                    break;
            }
            break;
    }
}

function repopulateDropdowns(caseID){
    findNewArrays(caseID);
    init_populateDropdown(caseID);
    displayStats(caseID);
}

function clearSelect (caseID){
    let element = document.getElementById('nameSelect' +caseID);
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}