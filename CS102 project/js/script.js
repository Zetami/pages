// JavaScript
var mtopicsflag = 0;
document.getElementById("mobilenav").classList.add("hideburger");
document.getElementById("mtopicsDrop").classList.add("hidetopics");

function burger(){
    mtopicsflag = 0;
    document.getElementById("mtopicsDrop").classList.add("hidetopics");
    document.getElementById("mobilenav").classList.toggle("hideburger");

    document.getElementById("mtopics").style.backgroundColor = "#ffffa0";
    document.getElementById("mtopics").style.textShadow = "none";
}

function mtopicsDrop(){
    mtopicsflag ^= 1;
    document.getElementById("mtopicsDrop").classList.toggle("hidetopics");

    if(mtopicsflag == 1){
        document.getElementById("mtopics").style.backgroundColor = "#ffc53d";
        document.getElementById("mtopics").style.textShadow = "2px 2px 2px #ffffa0";
    }
    else{
        document.getElementById("mtopics").style.backgroundColor = "#ffffa0";
        document.getElementById("mtopics").style.textShadow = "none";
    }
}

// JQuery
$(document).ready(function() {
    // BASICS COSTUME SWAPS
    $("#costume_current_shadow").css("transform", "translate(10px, -5px)");

    $("#costume1").click(function(){
        swap();
        $("#costume_current_shadow").attr("src",".\\images\\characters\\Bowser_Jr_Shadow.webp");
        $("#costume_current").attr("src",".\\images\\characters\\Bowser_Jr.webp");
        setTimeout(swapEnd, 50);
    });
    $("#costume2").click(function(){
        swap();
        $("#costume_current_shadow").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Larry_Shadow.webp");
        $("#costume_current").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Larry.webp")
        setTimeout(swapEnd, 50);
    });
    $("#costume3").click(function(){
        swap();
        $("#costume_current_shadow").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Roy_Shadow.webp");
        $("#costume_current").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Roy.webp")
        setTimeout(swapEnd, 50);
    });
    $("#costume4").click(function(){
        swap();
        $("#costume_current_shadow").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Wendy_Shadow.webp");
        $("#costume_current").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Wendy.webp")
        setTimeout(swapEnd, 50);
    });
    $("#costume5").click(function(){
        swap();
        $("#costume_current_shadow").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Iggy_Shadow.webp");
        $("#costume_current").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Iggy.webp")
        setTimeout(swapEnd, 50);
    });
    $("#costume6").click(function(){
        swap();
        $("#costume_current_shadow").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Morton_Shadow.webp");
        $("#costume_current").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Morton.webp")
        setTimeout(swapEnd, 50);
    });
    $("#costume7").click(function(){
        swap();
        $("#costume_current_shadow").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Lemmy_Shadow.webp");
        $("#costume_current").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Lemmy.webp")
        setTimeout(swapEnd, 50);
    });
    $("#costume8").click(function(){
        swap();
        $("#costume_current_shadow").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Ludwig_Shadow.png");
        $("#costume_current").attr("src",".\\images\\characters\\Bowser_Jr_alts\\Ludwig.png")
        setTimeout(swapEnd, 50);
    });


    // shadow swappers
    function swap(){
        $("#costume_current_shadow").css({"transform" : ""});
        $("#costume_current_shadow").css({"transition" : "0s ease-out"});
    }

    function swapEnd(){
        $("#costume_current_shadow").css({"transition" : "0.6s ease-out"});
        $("#costume_current_shadow").css("transform", "translate(10px, -5px)");
    }
    
  });
  