function SG2Star(dollCase){
    switch (dollCase){
        case 1:
            if (typeSelect1.value != 'SG'){
                document.getElementById("2star1").removeAttribute("hidden");
            }
            if (typeSelect1.value == 'SG'){
                document.getElementById("2star1").setAttribute("hidden", "")
            }
            if (raritySelect1.value != 2){
                document.getElementById("SG1").removeAttribute("hidden");
            }
            if (raritySelect1.value == 2){
                document.getElementById("SG1").setAttribute("hidden", "");
            }
        break;
        
        case 2:
            if (typeSelect2.value != 'SG'){
                document.getElementById("2star2").removeAttribute("hidden");
            }
            if (typeSelect2.value == 'SG'){
                document.getElementById("2star2").setAttribute("hidden", "")
            }
            if (raritySelect2.value != 2){
                document.getElementById("SG2").removeAttribute("hidden");
            }
            if (raritySelect2.value == 2){
                document.getElementById("SG2").setAttribute("hidden", "");
            }
        break;
        
        case 3:
            if (typeSelect3.value != 'SG'){
                document.getElementById("2star3").removeAttribute("hidden");
            }
            if (typeSelect3.value == 'SG'){
                document.getElementById("2star3").setAttribute("hidden", "")
            }
            if (raritySelect3.value != 2){
                document.getElementById("SG3").removeAttribute("hidden");
            }
            if (raritySelect3.value == 2){
                document.getElementById("SG3").setAttribute("hidden", "");
            }
        break;
        
        case 4:
            if (typeSelect4.value != 'SG'){
                document.getElementById("2star4").removeAttribute("hidden");
            }
            if (typeSelect4.value == 'SG'){
                document.getElementById("2star4").setAttribute("hidden", "")
            }
            if (raritySelect4.value != 2){
                document.getElementById("SG4").removeAttribute("hidden");
            }
            if (raritySelect4.value == 2){
                document.getElementById("SG4").setAttribute("hidden", "");
            }
        break;
        
        case 5:
            if (typeSelect5.value != 'SG'){
                document.getElementById("2star5").removeAttribute("hidden");
            }
            if (typeSelect5.value == 'SG'){
                document.getElementById("2star5").setAttribute("hidden", "")
            }
            if (raritySelect5.value != 2){
                document.getElementById("SG5").removeAttribute("hidden");
            }
            if (raritySelect5.value == 2){
                document.getElementById("SG5").setAttribute("hidden", "");
            }
        break;
    }
}