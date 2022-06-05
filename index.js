var menubtt = document.getElementById("menuRoz");
menubtt.addEventListener("click", hideorunhide);

function hideorunhide(){
    if (document.getElementById("tellinks").style.display == "none"){
        document.getElementById("tellinks").style.display = "block"
    }
    else {document.getElementById("tellinks").style.display = "none"}

    if (document.getElementById("linkizew").style.display == "block"){
        document.getElementById("linkizew").style.display = "none";
    }
}

var linkizewbtt = document.getElementById("menudownloadbutton");
linkizewbtt.addEventListener("click", hideorunhidezewlink);
var linkizewbtt1 = document.getElementById("menudown");
linkizewbtt1.addEventListener("click", hideorunhidezewlink);

function hideorunhidezewlink(){
    if (document.getElementById("linkizew").style.display == "none"){
        document.getElementById("linkizew").style.display = "block";
    }
    else {document.getElementById("linkizew").style.display = "none"}
    if (document.getElementById("tellinks").style.display == "block"){
        document.getElementById("tellinks").style.display = "none"
    }
    
}
