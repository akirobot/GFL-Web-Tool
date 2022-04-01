function dollSelect(type, rarity) {
    var oXHR = new XMLHttpRequest();

    oXHR.onredystatechange = reportStatus;
    oXHR.open("GET", "db/dolls.json", true);
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4){
            document.getElementById('dolls').innerHTML = this.responseText;
        }
    }
}
document.getElementById('dolls').innerHTML = dollSelect(type, rarity);