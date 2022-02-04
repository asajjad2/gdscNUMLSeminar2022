// console.log("hey");


//passing by value - primitive types
// var a = 5;
// var b = a;

// a = 8;

// console.log(b,a);


// //passing by ref - arrays, objects, functions

// var arr = [];
// var marks = arr;

// arr.push(22);
// console.log(arr,marks);

// arr = [33,44];

// console.log(arr,marks);

// var obj = {
//     name : "Ali"
// };

// var obj2 = obj;
// console.log(obj,obj2);

// obj = { //when declaration syntax is used, newer memory is allocated
//     name : "Smith"
// };

// console.log(obj,obj2);

//scope
//var has functional based scope -
//let & const has block based scope
var names = "Smith,John";

function display(){
    var num = 5;
    console.log(names,num);
}

// console.log(names,num);

function fun(){

    var names = "Ali,Khan";
    function nestedFun(){
        var names = "Eva,Braun";
        console.log(names); //most local scope is checked first, then outer and so on until global scope reached
    }

    return nestedFun();
}
 
fun();


// == vs ===

//  == converts before checking
//  === doesn't convert before checking
// complete algorithms - can be checked

// ES6 functions

function display(name){ //normal function syntax
    console.log(name);
}

const display2 = (name) => {//ES6 function syntax - arrow function
    console.log(name);
}

// same calling syntax

display("Ali");
display2("Akbar");

// IIFE - immediately invoked function expression

//normal functions can be called again many times 
// IIFE invoked immediately and can't be called again

console.log(display);


//used for data privacy - local scope ends forever

(function display3(name="Ali"){
    console.log("Hello World "+name);
})();

// console.log(display3);
// display3();

// hoisting

// cant use let variables before initialization - can use var variables
// es6 functions can't be used b4 definition - normal ones can be


// closures - like IIFE - for privacy
//function executed but still can access local variables

function display4(){
    let x = 5;

    function nestedFun(){
        console.log(x);
        console.log("Hello world");
    }

    return nestedFun;
}

const myFun = display4();
myFun(); //still can access x even tho display4 has already finished executing


// this keyword - value keeps changing - context matters

console.log(this.name);

let obj3 = {

    name : "Harris",

    displayName: function(){
        console.log(this.name);
    }

};

obj3.displayName();

//can be forced to change

let obj4 = {
    name : "Eva"
};

obj3.displayName.call(obj4);