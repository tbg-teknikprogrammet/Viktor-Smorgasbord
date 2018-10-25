
var text ="";
var i = 300;
// skriv ut alla 
while(i <= 333) {
    text += "Numret är: " +i+"<br>";
    i++;
    if(i% 2 ==0)
    i++;
    
}
document.getElementById("output").innerHTML = text;