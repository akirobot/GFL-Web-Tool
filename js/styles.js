function changeLabelColor(idNum){
    switch(document.getElementById("raritySelect" +idNum).value){
        case '1':
            document.getElementById("nameSelect" +idNum).style = "background-color:#dfb6ff";
            document.getElementById("raritySelect" +idNum).style = "background-color:#dfb6ff";
            document.getElementById("typeSelect" +idNum).style = "background-color:#dfb6ff";
            break;
        case '2':
            document.getElementById("nameSelect" +idNum).style = "background-color:#ffffff";
            document.getElementById("raritySelect" +idNum).style = "background-color:#ffffff";
            document.getElementById("typeSelect" +idNum).style ="background-color:#ffffff";
            break;
        case '3':
            document.getElementById("nameSelect" +idNum).style = "background-color:#6bdfce";
            document.getElementById("raritySelect" +idNum).style = "background-color:#6bdfce";
            document.getElementById("typeSelect" +idNum).style = "background-color:#6bdfce";
            break;
        case '4':
            document.getElementById("nameSelect" +idNum).style = "background-color:#d6e35a";
            document.getElementById("raritySelect" +idNum).style = "background-color:#d6e35a";
            document.getElementById("typeSelect" +idNum).style = "background-color:#d6e35a";
            break;
        case '5':
            document.getElementById("nameSelect" +idNum).style = "background-color:#ffb600";
            document.getElementById("raritySelect" +idNum).style = "background-color:#ffb600";
            document.getElementById("typeSelect" +idNum).style = "background-color:#ffb600";
            break;
    }
}