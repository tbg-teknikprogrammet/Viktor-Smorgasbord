// När använder vi while?
// När vi inte vet hut många gånger koden behöver itereras

// while(Villkor){
    //kod
// }

var text ="";
var i = 0;

while(i <= 20) {
    text += "Numret är: " +i+"<br>";
    i++;
    if(i ==6){
        break;
    }
}

document.getElementById("output").innerHTML = text;