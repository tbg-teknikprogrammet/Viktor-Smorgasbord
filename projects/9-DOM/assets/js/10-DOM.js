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