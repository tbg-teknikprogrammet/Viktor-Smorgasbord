document.getElementsByTagName("button")[0].addEventListener("click",menu);
function menu(Arr)//Makes an array
{
    var Arr = [];
    var input = 0;
    while(input != "quit" || "Quit"){//quits the loop
        input = prompt("What do you want to modify")
            if (input == "new") {
              input = prompt("What do you want to remember?");
              Arr.push(input);//adds one new todo in Array
              console.log("you have added: " + input)
            } else if (input == "list"){
              for(var i = 0; i <= Arr.length-1; i++) 
                {
                    console.log(Arr[i])
                }
                console.log("this is all the todo in your todo list")//shows my list
            } else if (input == "delete"){
              input = prompt("What the fuk do you want to remove?");
                Arr.splice(input , 1);//removes one todo from array
                console.log("you have deleted index: " + input + " from the list!")
            } else if (input == "quit"){
              break;
            } else {//try catchs
              console.log("please try again.")
            }
    }
    
}