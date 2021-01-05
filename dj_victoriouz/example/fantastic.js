// https://www.modernjs.com/syntax.html | JavaScript key concepts & syntax: ES5, ES6, ES2016 (ES7), ES2017 (ES8) and TypeScript
// Contents of fantastic.js
// var fantasticNS = {};

// (function(namespace) { 
//     namespace.render = function() { console.log("Hello from fantasticNS.render()!") };
// })(fantasticNS);

// fantasticNS.render();

// // Let's call the render() function for each of the different libraries
// fantasticNS.render();
// wonderfulNS.render();
// amazingNS.privateRenderer; // This does nothing because privateRenderer is local to IIFE block
// amazingNS.render();


// The contents of fantastic.js first show the fantasticNS variable is assigned to an empty object {}, that will serve as the namespace reference -- for the moment, bear with me on the talk about JavaScript objects, the next chapters on JavaScript data types and JavaScript object-orientated and prototype-based programming contain more details about this topic. Next, notice the IIFE syntax (function() {} ); which wraps the bulk of the logic, including a render function. In this case, the IIFE is given the fantasticNS reference, to permit access to the functions inside the IIFE.

// Namespaces with object assignment and object notation
// var fantastic = { }

// fantastic.render = function() {
//        console.log("Hello from fantastic.render()!")
// }



// // Contents of fantastic.js
// export let render = function() {
//     console.log("Hello from fantastic.render()!")
// }



// Contents of fantastic.js
export let render = function() {
    console.log("Hello from fantastic.render()!")
}

let main = function() { 
 console.log("main() in fantastic"); 
}

export default main;