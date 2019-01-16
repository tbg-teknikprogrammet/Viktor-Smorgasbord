var todos = [];
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
  });
