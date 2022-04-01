function handleflexwrap() {
    if ($("#header").height() > 120) {
        $("#header").addClass("wrapped");
    } else {
        $("#header").removeClass("wrapped");
    }
}
//Check on load
handleflexwrap();    

//Check again on resize
$(window).on('resize', function() {
    handleflexwrap();
});