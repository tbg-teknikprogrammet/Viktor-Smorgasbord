
document.getElementsByTagName("button")[0].addEventListener("click",menu);
//On button click starts a while loop
function menu(vector){ //running the function menu and creates an empty array
  var vector =[];
  var input = 0;
  while(input != "quit");{
    input = prompt("what would you like to change")
    switch(input){ // same as else
      case "new": // adds a new item to the end of an array
      input = prompt("WHat will you remember?");
      vector.push(input);

    }
  }
}






/*var todos = [];
var btnActive = document.getElementById("activate")
btnActive.addEventListener("click", function(){
  var input = prompt("Will you do what?");
  while(input !== "quit"|| input !== "quit"){
    if(input === "new") {
      var newTodo = prompt("Will you add?");
      todos.push(newTodo);
      console.log(newTodo + " been added to the list")

      

      

  }
    else if (input === "list"){
    todos.forEach(function(todo, i){
      console.log("on index" + i + ": " + todo);

    });
    }
    else if (input === "delete"){
      var index = prompt("Enter the index of todo u want to delete");
      console.log("U habe deleted index: " + index);
      todos.splice(index, i);
    }
    input = prompt("will u do what? :v ");
    }
    if (input === "quit" || input === "quit"){
      console.log(">>> ok, U have quit the app")
    }
  });*/
