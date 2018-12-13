//model a a single person; name,age and city
var person =["Steve",69,"EagleshieldBay"];

//Retrieve data from person

//hometown
console.log(person[2]);

//reverse the order of data
var person2 =[31, "LiveLong", "Gary"];

//hometown
console.log(person2[2]);

// To model a person is the perfect use case for an object
var person = {
    name: "BillyBob", // key:value pair nyckel:värde-par
    age:69,
    hometown:"HersneezedDonaldDuck"
};

//Note: Unlike arrays, objects have no order
//The key/value pairs are just floating around inside the object

//retrieve data from object with the dot notation
console.log("This person's name is " + person.name);

console.log(person.age);

person.age = person.age +1; // +=1;

console.log(person.age);

person.hometown = "Buy a harbour";

//Like arrays, there are a few methods of initializing objects

//make an empty object and assign key/value pair to us
var oddNumbs ={};
oddNumbs.int =1;
oddNumbs.str = "one";
oddNumbs.isOdd = true;

//All at once
var dog ={
    name: "Dodge",
    breed: "Golden",
    age: 3,
    isFriendly: false
}

var cat = new Object();
cat.name = "Ben";
cat.breed = "Skogskatt";
cat.age = 4;
cat.isLazy = true;

//objects can hold all sorts of data
var junkObject ={
    name: "Junko",
    age: 33,
    color: "space grey",
    isEvil: true,
    Friends: ["Daruk","Revali","Urbosa"],
    pet:{
        name: "iCarly",
        species: "Dragon",
        age: 5


    }
}

console.log(junkObject.pet.species);
console.log(junkObject.Friends[2]);
console.log(junkObject.isEvil);

//1. create an array of posts (author,title,comments) where each index is an object

var posts =[
    {
        title: "cats are cute!",
        author: "Cat UwuEr",
        comments: ["Awesome post man!, HECC NO?!"]
    },
    {
        title: "dogs owns the cats",
        author: "King K Dog",
        comments: ["<3","Big F* DoggoKind!"]
    }
];

//2. arrays and object is often used in conjunction with eachother 
//array[index].objectProperty[index]
console.log(posts[1].comments[0]);

for (var i = 0; i < posts.length; i++) {
    console.log(posts[i].title,posts[i].author,posts[i].comments,);

}hh