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
