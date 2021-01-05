// https://www.modernjs.com/syntax.html | JavaScript key concepts & syntax: ES5, ES6, ES2016 (ES7), ES2017 (ES8) and TypeScript
// Contents of wonderful.js 
// var wonderfulNS = {};

// (function() {
//     this.render =  function() {  console.log("Hello from wonderfulNS.render()!") };
// }).apply(wonderfulNS);

// // Let's call the render() function for each of the different libraries
// fantasticNS.render();
// wonderfulNS.render();
// amazingNS.privateRenderer; // This does nothing because privateRenderer is local to IIFE block
// amazingNS.render();


// The contents of wonderful.js use a slightly different syntax variation to incorporate a namespace. Similarly, the wonderfulJS variable is assigned to an empty object {} that will serve as the namespace reference. However, notice the IIFE syntax now uses (function() { }).apply() to wrap the bulk of the logic, including a render function. In this case, the apply()[6] function allows IIFE to modify the function's this reference to another value -- in this case to wonderfulNS -- and forgo using arguments in its definition (e.g.(function(namespace) { }) like the IIFE for fantastic.js).

// Namespaces with object assignment and object notation
// var wonderful = {
//     render: function() { 
//         console.log("Hello from wonderful.render()!");
//        }
// }

// Contents of wonderful.js
// export let render = function() {
//     console.log("Hello from wonderful.render()!");
// }


// Contents of wonderful.js
export let render = function() {
    console.log("Hello from wonderful.render()!");
}

console.log("Log statement in global scope of wonderful.js");
