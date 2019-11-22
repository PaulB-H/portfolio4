$(document).ready(function(){

    function pageLoad () {
        $("#head").fadeIn();
        setTimeout(function(){ 
            $("#content").fadeIn(); 
        }, 500);
    }

    pageLoad();

    $(".aboutLink").click(function () {
        $(".aboutLink").addClass("active");
        $(".portfolioLink").removeClass("active");
        $(".contactLink").removeClass("active");
        $("#portfolio").fadeOut();
        $("#contact").fadeOut();
        setTimeout(function(){ 
            $("#about").fadeIn(); 
        }, 500);
    });


    $(".portfolioLink").click(function () {
        $(".portfolioLink").addClass("active");
        $(".aboutLink").removeClass("active");
        $(".contactLink").removeClass("active");
        $("#about").fadeOut();
        $("#contact").fadeOut();
        setTimeout(function(){ 
            $("#portfolio").fadeIn(); 
        }, 500);
    });



    $(".contactLink").click(function () {
        $(".contactLink").addClass("active");
        $(".aboutLink").removeClass("active");
        $(".portfolioLink").removeClass("active");
        $("#about").fadeOut();
        $("#portfolio").fadeOut();
        setTimeout(function(){ 
            $("#contact").fadeIn(); 
        }, 500);
    });



});


