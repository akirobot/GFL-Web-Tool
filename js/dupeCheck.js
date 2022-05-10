function init_dupeCheck(){
    _SELECTDOLL1 = _FOUNDDOLLS1[0];
    /*_FOUNDDOLLS2 = _FOUNDDOLLS2.filter(function (value, index, arr){return value != _SELECTDOLL1;});
    _FOUNDDOLLS3 = _FOUNDDOLLS3.filter(function (value, index, arr){return value != _SELECTDOLL1;});
    _FOUNDDOLLS4 = _FOUNDDOLLS4.filter(function (value, index, arr){return value != _SELECTDOLL1;});
    _FOUNDDOLLS5 = _FOUNDDOLLS5.filter(function (value, index, arr){return value != _SELECTDOLL1;});*/

    _SELECTDOLL2 = _FOUNDDOLLS2[0];
    /*_FOUNDDOLLS1 = _FOUNDDOLLS1.filter(function (value, index, arr){return value != _SELECTDOLL2;});
    _FOUNDDOLLS3 = _FOUNDDOLLS3.filter(function (value, index, arr){return value != _SELECTDOLL2;});
    _FOUNDDOLLS4 = _FOUNDDOLLS4.filter(function (value, index, arr){return value != _SELECTDOLL2;});
    _FOUNDDOLLS5 = _FOUNDDOLLS5.filter(function (value, index, arr){return value != _SELECTDOLL2;});*/

    _SELECTDOLL3 = _FOUNDDOLLS3[0];
    /*_FOUNDDOLLS1 = _FOUNDDOLLS1.filter(function (value, index, arr){return value != _SELECTDOLL3;});
    _FOUNDDOLLS2 = _FOUNDDOLLS2.filter(function (value, index, arr){return value != _SELECTDOLL3;});
    _FOUNDDOLLS4 = _FOUNDDOLLS4.filter(function (value, index, arr){return value != _SELECTDOLL3;});
    _FOUNDDOLLS5 = _FOUNDDOLLS5.filter(function (value, index, arr){return value != _SELECTDOLL3;});*/

    _SELECTDOLL4 = _FOUNDDOLLS4[0];
    /*_FOUNDDOLLS1 = _FOUNDDOLLS1.filter(function (value, index, arr){return value != _SELECTDOLL4;});
    _FOUNDDOLLS2 = _FOUNDDOLLS2.filter(function (value, index, arr){return value != _SELECTDOLL4;});
    _FOUNDDOLLS3 = _FOUNDDOLLS3.filter(function (value, index, arr){return value != _SELECTDOLL4;});
    _FOUNDDOLLS5 = _FOUNDDOLLS5.filter(function (value, index, arr){return value != _SELECTDOLL4;});*/

    _SELECTDOLL5 = _FOUNDDOLLS5[0];
    /*_FOUNDDOLLS1 = _FOUNDDOLLS1.filter(function (value, index, arr){return value != _SELECTDOLL5;});
    _FOUNDDOLLS2 = _FOUNDDOLLS2.filter(function (value, index, arr){return value != _SELECTDOLL5;});
    _FOUNDDOLLS3 = _FOUNDDOLLS3.filter(function (value, index, arr){return value != _SELECTDOLL5;});
    _FOUNDDOLLS4 = _FOUNDDOLLS4.filter(function (value, index, arr){return value != _SELECTDOLL5;});*/
}

function dupeCheck(){
    for (var i = 1; i <= 5; i++){
        findNewArrays(i);
    }

    _FOUNDDOLLS2 = _FOUNDDOLLS2.filter(function (value, index, arr){return value != _SELECTDOLL1;});
    _FOUNDDOLLS3 = _FOUNDDOLLS3.filter(function (value, index, arr){return value != _SELECTDOLL1;});
    _FOUNDDOLLS4 = _FOUNDDOLLS4.filter(function (value, index, arr){return value != _SELECTDOLL1;});
    _FOUNDDOLLS5 = _FOUNDDOLLS5.filter(function (value, index, arr){return value != _SELECTDOLL1;});

    _FOUNDDOLLS1 = _FOUNDDOLLS1.filter(function (value, index, arr){return value != _SELECTDOLL2;});
    _FOUNDDOLLS3 = _FOUNDDOLLS3.filter(function (value, index, arr){return value != _SELECTDOLL2;});
    _FOUNDDOLLS4 = _FOUNDDOLLS4.filter(function (value, index, arr){return value != _SELECTDOLL2;});
    _FOUNDDOLLS5 = _FOUNDDOLLS5.filter(function (value, index, arr){return value != _SELECTDOLL2;});

    _FOUNDDOLLS1 = _FOUNDDOLLS1.filter(function (value, index, arr){return value != _SELECTDOLL3;});
    _FOUNDDOLLS2 = _FOUNDDOLLS2.filter(function (value, index, arr){return value != _SELECTDOLL3;});
    _FOUNDDOLLS4 = _FOUNDDOLLS4.filter(function (value, index, arr){return value != _SELECTDOLL3;});
    _FOUNDDOLLS5 = _FOUNDDOLLS5.filter(function (value, index, arr){return value != _SELECTDOLL3;});

    _FOUNDDOLLS1 = _FOUNDDOLLS1.filter(function (value, index, arr){return value != _SELECTDOLL4;});
    _FOUNDDOLLS2 = _FOUNDDOLLS2.filter(function (value, index, arr){return value != _SELECTDOLL4;});
    _FOUNDDOLLS3 = _FOUNDDOLLS3.filter(function (value, index, arr){return value != _SELECTDOLL4;});
    _FOUNDDOLLS5 = _FOUNDDOLLS5.filter(function (value, index, arr){return value != _SELECTDOLL4;});

    _FOUNDDOLLS1 = _FOUNDDOLLS1.filter(function (value, index, arr){return value != _SELECTDOLL5;});
    _FOUNDDOLLS2 = _FOUNDDOLLS2.filter(function (value, index, arr){return value != _SELECTDOLL5;});
    _FOUNDDOLLS3 = _FOUNDDOLLS3.filter(function (value, index, arr){return value != _SELECTDOLL5;});
    _FOUNDDOLLS4 = _FOUNDDOLLS4.filter(function (value, index, arr){return value != _SELECTDOLL5;});

    console.log (_FOUNDDOLLS1);
    console.log (_FOUNDDOLLS2);
    console.log (_FOUNDDOLLS3);
    console.log (_FOUNDDOLLS4);
    console.log (_FOUNDDOLLS5);
}