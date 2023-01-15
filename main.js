function show() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
    document.getElementById("openbtn").style.visibility = "hidden";
 }
 function hide() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
    document.getElementById("openbtn").style.visibility = "visible";
 }