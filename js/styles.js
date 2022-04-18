function changeLabelColor(idNum){
    switch(idNum){
        case 1:
            switch(document.getElementById("raritySearch1").value){
                case '1':
                    document.getElementById("Leader").style = "background-color:#dfb6ff";
                    break;
                case '2':
                    document.getElementById("Leader").style = "background-color:#ffffff";
                    break;
                case '3':
                    document.getElementById("Leader").style = "background-color:#6bdfce";
                    break;
                case '4':
                    document.getElementById("Leader").style = "background-color:#d6e35a";
                    break;
                case '5':
                    document.getElementById("Leader").style = "background-color:#ffb600";
                    break;
            }

        case 2:
            switch(document.getElementById("raritySearch2").value){
                case '1':
                    document.getElementById("1stMember").style = "background-color:#dfb6ff";
                    break;
                case '2':
                    document.getElementById("1stMember").style = "background-color:#ffffff";
                    break;
                case '3':
                    document.getElementById("1stMember").style = "background-color:#6bdfce";
                    break;
                case '4':
                    document.getElementById("1stMember").style = "background-color:#d6e35a";
                    break;
                case '5':
                    document.getElementById("1stMember").style = "background-color:#ffb600";
                    break;
            }

        case 3:
            switch(document.getElementById("raritySearch3").value){
                case '1':
                    document.getElementById("2ndMember").style = "background-color:#dfb6ff";
                    break;
                case '2':
                    document.getElementById("2ndMember").style = "background-color:#ffffff";
                    break;
                case '3':
                    document.getElementById("2ndMember").style = "background-color:#6bdfce";
                    break;
                case '4':
                    document.getElementById("2ndMember").style = "background-color:#d6e35a";
                    break;
                case '5':
                    document.getElementById("2ndMember").style = "background-color:#ffb600";
                    break;
            }

        case 4:
            switch(document.getElementById("raritySearch4").value){
                case '1':
                    document.getElementById("3rdMember").style = "background-color:#dfb6ff";
                    break;
                case '2':
                    document.getElementById("3rdMember").style = "background-color:#ffffff";
                    break;
                case '3':
                    document.getElementById("3rdMember").style = "background-color:#6bdfce";
                    break;
                case '4':
                    document.getElementById("3rdMember").style = "background-color:#d6e35a";
                    break;
                case '5':
                    document.getElementById("3rdMember").style = "background-color:#ffb600";
                    break;
            }

        case 5:
            switch(document.getElementById("raritySearch5").value){
                case '1':
                    document.getElementById("4thMember").style = "background-color:#dfb6ff";
                    break;
                case '2':
                    document.getElementById("4thMember").style = "background-color:#ffffff";
                    break;
                case '3':
                    document.getElementById("4thMember").style = "background-color:#6bdfce";
                    break;
                case '4':
                    document.getElementById("4thMember").style = "background-color:#d6e35a";
                    break;
                case '5':
                    document.getElementById("4thMember").style = "background-color:#ffb600";
                    break;
            }
    }
}