function SG2Star(dollCase){
    switch (dollCase){
        case '1':
            if (dollSearch1.value != 'SG'){
                document.getElementById("2star1").removeAttribute("hidden");
            }
            if (dollSearch1.value == 'SG'){
                document.getElementById("2star1").setAttribute("hidden", "")
            }
            if (raritySearch1.value != 2){
                document.getElementById("shotgun1").removeAttribute("hidden");
            }
            if (raritySearch1.value == 2){
                document.getElementById("shotgun1").setAttribute("hidden", "");
            }
        break;
        
        case '2':
            if (dollSearch2.value != 'SG'){
                document.getElementById("2star2").removeAttribute("hidden");
            }
            if (dollSearch2.value == 'SG'){
                document.getElementById("2star2").setAttribute("hidden", "")
            }
            if (raritySearch2.value != 2){
                document.getElementById("shotgun2").removeAttribute("hidden");
            }
            if (raritySearch2.value == 2){
                document.getElementById("shotgun2").setAttribute("hidden", "");
            }
        break;
        
        case '3':
            if (dollSearch3.value != 'SG'){
                document.getElementById("2star3").removeAttribute("hidden");
            }
            if (dollSearch3.value == 'SG'){
                document.getElementById("2star3").setAttribute("hidden", "")
            }
            if (raritySearch3.value != 2){
                document.getElementById("shotgun3").removeAttribute("hidden");
            }
            if (raritySearch3.value == 2){
                document.getElementById("shotgun3").setAttribute("hidden", "");
            }
        break;
        
        case '4':
            if (dollSearch4.value != 'SG'){
                document.getElementById("2star4").removeAttribute("hidden");
            }
            if (dollSearch4.value == 'SG'){
                document.getElementById("2star4").setAttribute("hidden", "")
            }
            if (raritySearch4.value != 2){
                document.getElementById("shotgun4").removeAttribute("hidden");
            }
            if (raritySearch4.value == 2){
                document.getElementById("shotgun4").setAttribute("hidden", "");
            }
        break;
        
        case '5':
            if (dollSearch5.value != 'SG'){
                document.getElementById("2star5").removeAttribute("hidden");
            }
            if (dollSearch5.value == 'SG'){
                document.getElementById("2star5").setAttribute("hidden", "")
            }
            if (raritySearch5.value != 2){
                document.getElementById("shotgun5").removeAttribute("hidden");
            }
            if (raritySearch5.value == 2){
                document.getElementById("shotgun5").setAttribute("hidden", "");
            }
        break;
    }
}