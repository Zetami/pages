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
