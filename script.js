$(document).ready(function(){

    function pageLoad () {
        $("#head").fadeIn(600);
        setTimeout(function(){ 
            $("#content").fadeIn(300); 
        }, 500);
    }

    pageLoad();

    $(".aboutLink").click(function () {
        $(".aboutLink").addClass("active");
        $(".portfolioLink").removeClass("active");
        $(".contactLink").removeClass("active");
        $("#portfolio").fadeOut(100);
        $("#contact").fadeOut(100);
        setTimeout(function(){ 
            $("#about").fadeIn(100); 
        }, 500);
    });

    $(".portfolioLink").click(function () {
        $(".portfolioLink").addClass("active");
        $(".aboutLink").removeClass("active");
        $(".contactLink").removeClass("active");
        $("#about").fadeOut(100);
        $("#contact").fadeOut(100);
        setTimeout(function(){ 
            $("#portfolio").fadeIn(100); 
        }, 500);
    });

    $(".contactLink").click(function () {
        $(".contactLink").addClass("active");
        $(".aboutLink").removeClass("active");
        $(".portfolioLink").removeClass("active");
        $("#about").fadeOut(100);
        $("#portfolio").fadeOut(100);
        setTimeout(function(){ 
            $("#contact").fadeIn(100); 
            $("#resume").fadeIn(100); 
        }, 500);
    });

 
    

});