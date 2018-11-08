// //Föräldern sjunger och barnet lyssnar
// console.log("Blinka lilla stjärna där");
// console.log("Blinka lilla stjärna där");
// console.log("Hur jag undrar var du är");
// console.log("Fjäran lockar du min syn");
// console.log("likt en diamant i skyn");

// //Barnet nynnar med
// console.log("Blinka lilla stjärna där");
// console.log("Blinka lilla stjärna där");
// console.log("Hur jag undrar var du är");
// console.log("Fjäran lockar du min syn");
// console.log("likt en diamant i skyn");

// // Nu sjunger barnet helt själv
// console.log("Blinka lilla stjärna där");
// console.log("Blinka lilla stjärna där");
// console.log("Hur jag undrar var du är");
// console.log("Fjäran lockar du min syn");
// console.log("likt en diamant i skyn");

//THIS CODE IS WET! Write everything twice Write everything twice
//Eftersträva att eran kod är DRY! Don´t Repeat yourself
function twinkleTwinkle(){
    console.log("Blinka lilla stjärna där");
    console.log("Blinka lilla stjärna där");
    console.log("Hur jag undrar var du är");
    console.log("Fjäran lockar du min synd");
    console.log("likt en diamant i byn");
}
//Call a function/anropa e function
twinkleTwinkle();
twinkleTwinkle();
twinkleTwinkle();

//Deklarera en funktion
function doSomething(){
    console.log("Hello World!");
    console.log("Im doing something...");
}
//Anropa funktion
doSomething()
//Visar innehållet i funktionen
doSomething;

//Parameter och argument
function square(nun, nun1){
console.log(nun * nun1);


}

//Anropar funktionen med två stycken argument
square(5, 6);

function sayHello(name){
    console.log("Well hello there, my dear"+ name);
}

//Anropar funktionen med ett argument, i form av en string
sayHello("Master");
sayHello("Göran");

function area(length, height){
    console.log("The area of:"+ length + "and" + height + "is" + length * height);
}

area(5, 10);

function greet(person1, person2, person3, person4,person5){
    console.log("Hej," +person1 +"!" )
    console.log("Hej," +person2 +"!" )
    console.log("Hej," +person3 +"!" )
    console.log("Hej," +person4 +"!" )
    console.log("Hej," +person5 +"!" )
}
greet("Adam","Knurt","Billy Bobber","Freddy","Lara");

/*
********************
functions- return
********************
*/

// Tänk er att en funktion är ungefär som en maskin.
//Funktionen tar några inputs(argument)
//Dessa argument används sedan inuti funktionen på något sätt -
//Kanske matematiska beräkningar - kollar om värdet stämmer överens
//Sedan returnerar funktionen ett värde, någon sorts output
//Detta kallas för return a value - returnerar ett värde
//Man kan alltså fånga upp värdet som funktionen ger
//Och vidare i sin kod använda värdet av den funktionen för att använda 
//På något annat sätt,

function squared(x){
    return x * x;
}
console.log("4 squared is:" + squared(4));


//Return  kan endast returnera ett värde per funktion
//Om man har två stycken rader med return, så kommer funktionen enbart att
//returnera den första return som den stöter på


var result = squared(10);
console.log(result);

/*
***************************
Funktions -muntligt test
***************************
*/

// Test 1
//Förklara vad som händer
function test1(x, y){
    return y - x;
}

console.log(test1(10, -40));

/*
******************************
functions - skriftligt test
******************************
*/

//Write a function isEven() which takes a single numeric argument and
//returns true if the number is even, and false otherwise

function isEven(x,){
    if (x % 2 ==0 ){
        return true;
    }
        else {
            return false;
        }
}


 
console.log(isEven(10))

//Write a function kebabTosnake() which takes a single kebab-cased string
//Argument and returns the snake_cased version
//Basically replace "_" with "_"

function kebabTosnake(str){
    //replace all dashes with
    var mystring = str.replace(/Wilford/g,"Master");
    //return str
    return mystring;
    }

kebabTosnake("Hej-jag-heter-Wilford");
console.log(kebabTosnake("H-E-L-L"));

/*
**********************
JS Scope
**********************
*/

function localScope(){
    var showScope = 31;
    console.log(showScope);
}
localScope();
console.log(showScope);

var showScope = "I´m a Global hentai-master";//Global variable === accessible in the entire script
console.log(showScope)

var showScope = 99; // Global variabel
function localScopeY(){
    showScopeY = 100;
    console.log(showScopeY);
}
console.log(showScopeY);//Global showscopeY
localScopeY();
console.log(showScopeY);

h