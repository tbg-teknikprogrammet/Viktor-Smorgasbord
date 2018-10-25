var name = "PV"; //string
var age  =19; //number
// == jämför men kollar inte datatyp
// === jämför och kollar datatyp

if(age < 18) {
    // är påståendet true - kör koden mellan måsvingarna
    console.log("STOP! Du är " + age + " år " );
}
else{
    // Är påståendet false - kör koden här mellan måsvingarna
    console.log("Vällkommen!");
}
//single line
/******** 
 /* Block line comment 
**********
   --- Guessing app ---

   **********
*/

// Deklarera en variabel
var secretNumber = 7;
// User input - Ta emot data

var userInput = Number(prompt("Gissa ett numer mellan 1-1000 d-_ -b")); // Detta returneras som en sträng

// Läsa av villkoret - Läser av user input 
if(userInput == secretNumber){
    document.writeln("Grattis du har vunnit en ny mobil <br>");
}
else if(userInput == 6 || userInput == 8) {
    document.writeln("Det bränns!");
}
else if(userInput > secretNumber){
        document.writeln("Du gissade för högt! testa igen...")
}
else{
   document.writeln("DU har förlorat 1000kr från kontot" ); 
}

var age = Number(prompt("Daddys ålder"));

if(age < 0){
    //Du är inte född ännu min pojke
    document.writeln("You are already dead!");
}
else if(age % 2 != 0  ){
    document.writeln("Du är udda Människa" );
}
else{
    document.writeln("Du är jämn");
}
