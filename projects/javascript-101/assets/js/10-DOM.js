document.URL;
document.links;
document.body;
document.head;

//Select
//Takes string argument and returns the one element with a matching ID 
var element = document.getElementsByClassName("highlight");
console.log(elements)
console.log(element)

// Takes string argument and returns a list of elements that have a matching class
var elements = document.getElementsByClassName("bolded");//Returns nodelist

var eles = document.getElementsByTagName("li");

var queryTag = document.querySelector("#highlight");

var queryAllTag = document.querySelectorAll(".bolded");

/*
**************
exercise 1
**************
*/
var Select1 = document.getElementsByID("first");
var Select2 = document. querySelector("p")[0];
//var PID = document.getElementsByTagName("p");
//var Select3 = document.getElementsByClassName("special");
var pClass = document.getElementsByClassName("special")[0];
var pTag = document.getElementsByTagName("p") ;
var pQs = document.querySelector("h1 + p");// first p tag after a h1- the adjacent
var pQSA = document.querySelectorAll("#first");
