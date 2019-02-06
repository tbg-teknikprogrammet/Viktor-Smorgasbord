alert("Aloha");

//select
var element = document.getElementById("highlight");

//maipulate
element.style.color = "orange";
element.style.border = "2px solid black";
element.style.fontSize = "20px";
element.style.backgroundColor = "black";
element.style.marginTop = "5px";

//DRY - do not repeat urself

var ele = document.querySelector(h1)
ele.classList.add("some class");

//select
var tag = document.querySelector("special")[1];

tag.classList.add("special-class");
tag.classList.remove("another-class");
tag.classList.toggle("another-class");