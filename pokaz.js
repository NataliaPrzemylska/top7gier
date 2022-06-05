var div = document.getElementById("pokaz");
var zdjecie = 2;
function pokazanie(){
    var html = "";
    html+="<img src = \"..\\..\\img/pokaz/z";
    html+=zdjecie;
    html+=".jpg\" alt=\"zdj\" id=\"zdj\" style=\"width:100%; height:100%;\">";
    div.innerHTML=html;
    if(zdjecie == 7){
        zdjecie = 1;
    }
    else zdjecie++;
}
var inter = window.setInterval(pokazanie, 2000);