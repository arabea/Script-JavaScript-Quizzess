/*
This script is associated with quiz 3 Page: Piece of Cake!
It's Mainly to make the tabs work
Inspired by W3Schools
*/

//function to open tab
function openTab(nTab) {
    //stores tab content
    var i;
    //gets tab buttons
    var x = document.getElementsByClassName("tab");
    //hides deactivated tab content
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    //shows activated tab content
    document.getElementById(nTab).style.display = "block";
}
