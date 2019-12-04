$(document).ready(function(){

    function pageLoad () {
        $("#head").fadeIn(600);
        setTimeout(function(){ 
            $("#content").fadeIn(300); 
        }, 500);
    }

    pageLoad();

    //************
    // NAVBAR
    //************ 
    $(".aboutLink").click(function () {
        $(".aboutLink").addClass("active");
        $(".portfolioLink .contactLink").removeClass("active");
        $("#portfolio #contact").fadeOut(100);
        setTimeout(function(){ 
            $("#about").fadeIn(100); 
        }, 500);
    });

    $(".portfolioLink").click(function () {
        $(".portfolioLink").addClass("active");
        $(".aboutLink .contactLink").removeClass("active");
        $("#about #contact").fadeOut(100);
        setTimeout(function(){ 
            $("#portfolio").fadeIn(100); 
        }, 500);
    });

    $(".contactLink").click(function () {
        $(".contactLink").addClass("active");
        $(".aboutLink .portfolioLink").removeClass("active");
        $("#about #portfolio").fadeOut(100);
        setTimeout(function(){ 
            $("#contact #resume").fadeIn(100);
        }, 500);
    });

    //************
    // PROJECT NAV
    //************ 


});