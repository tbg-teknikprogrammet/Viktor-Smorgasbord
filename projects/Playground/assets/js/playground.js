var bg = document.getElementsByTagName("body")[0];
var isBlue = false;

//var toggle = getElementsByTagName("_")
var Re2 = document.getElementById("Re2");
Re2.addEventListener("click",function(){
    bg.classList.toggle("hej");
    

    //bg toggla en klass med bg färg
});

var p1Display = document.getElementById("P1Score")
var p1Score = 0;
var p2Display = document.getElementById("P2Score")
var p2Score = 0;
var playingTo = document.getElementById("playingTo")
var inputNumber = document.getElementsByTagName("input")[0]
var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
var R = document.getElementById("R")
var Win= document.getElementById("Winner")
 
p1.addEventListener("click", function(){
    p1Score++
    p1Display.innerHTML = p1Score
})

p2.addEventListener("click", function(){
    p2Score++
    p2Display.innerHTML = p2Score
})
R.addEventListener("click", function(){
    p1Score = 0
    p1Display.innerHTML = p1Score
})
R.addEventListener("click",function(){
    p2Score = 0
    p2Display.innerHTML = p2Score
})
//hj
//clicker
var btn = document.getElementById("click1");
  count = 0;
btn.onclick = function() {
  count += 1;
  btn.innerHTML = " Yes Keep going!!: " + count;
};
//verkar inte funka 
// DOes A Barrelroll Fox style
var spinbtn = document.getElementById("click4");
spinbtn.addEventListener("click", function() {
  document.getElementById("spins").classList.toggle("rotate");
});